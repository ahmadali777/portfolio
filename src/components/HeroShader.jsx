import { useEffect, useRef } from 'react'

import vertSrc from '../shaders/heroVertex.glsl?raw'
import fragSrc from '../shaders/heroFragment.glsl?raw'

const MAX_RIPPLES = 16

function compileShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function linkProgram(gl, vert, frag) {
  const program = gl.createProgram()
  gl.attachShader(program, vert)
  gl.attachShader(program, frag)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  return program
}

export default function HeroShader() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const gl = canvas.getContext('webgl2', { alpha: false })
    if (!gl) {
      console.warn('WebGL not supported — shader background disabled')
      return
    }

    const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc)
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc)
    if (!vert || !frag) return

    const program = linkProgram(gl, vert, frag)
    if (!program) return
    gl.useProgram(program)

    // prettier-ignore
    const quad = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ])
    const vbo = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    // ── Uniform locations ────────────────────────────────────────────────
    const uTime        = gl.getUniformLocation(program, 'u_time')
    const uResolution  = gl.getUniformLocation(program, 'u_resolution')
    const uMouse       = gl.getUniformLocation(program, 'u_mouse')
    const uRippleCount = gl.getUniformLocation(program, 'u_rippleCount')

    const uRipplePos  = []
    const uRippleTime = []
    for (let i = 0; i < MAX_RIPPLES; i++) {
      uRipplePos.push(gl.getUniformLocation(program, "u_ripplePos[" + i + "]"))
      uRippleTime.push(gl.getUniformLocation(program, "u_rippleTime[" + i + "]"))
    }

    // ── Mouse state ─────────────────────────────────────────────────────
    const mouse = { x: 0.5, y: 0.5 }
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) / rect.width
      mouse.y = 1.0 - (e.clientY - rect.top) / rect.height
    }
    canvas.addEventListener('mousemove', onMouseMove)

    // ── Ripple state (circular buffer) ──────────────────────────────────
    const ripples = { positions: [], times: [], next: 0, count: 0 }
    const startTime = performance.now()

    function onClick(e) {
      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1.0 - (e.clientY - rect.top) / rect.height
      const t = (performance.now() - startTime) / 1000

      if (ripples.positions.length < MAX_RIPPLES * 2) {
        ripples.positions.push(x, y)
        ripples.times.push(t)
      } else {
        const idx = ripples.next * 2
        ripples.positions[idx]     = x
        ripples.positions[idx + 1] = y
        ripples.times[ripples.next] = t
      }
      ripples.next = (ripples.next + 1) % MAX_RIPPLES
      if (ripples.count < MAX_RIPPLES) ripples.count++
    }
    canvas.addEventListener('click', onClick)

    // ── Resize handling ─────────────────────────────────────────────────
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width  = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()

    let resizeTimeout
    function onResize() {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resize, 100)
    }
    window.addEventListener('resize', onResize)

    // ── Render loop ──────────────────────────────────────────────────────
    let raf

    function frame() {
      if (document.visibilityState === 'hidden') {
        raf = requestAnimationFrame(frame)
        return
      }

      const elapsed = (performance.now() - startTime) / 1000

      gl.uniform1f(uTime, elapsed)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform2f(uMouse, mouse.x, mouse.y)

      // Upload ripple data
      gl.uniform1i(uRippleCount, ripples.count)
      for (let i = 0; i < ripples.count; i++) {
        gl.uniform2f(uRipplePos[i], ripples.positions[i * 2], ripples.positions[i * 2 + 1])
        gl.uniform1f(uRippleTime[i], ripples.times[i])
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    // ── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimeout)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      gl.deleteProgram(program)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
      gl.deleteBuffer(vbo)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  )
}
