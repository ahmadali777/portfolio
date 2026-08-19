import { useEffect, useRef } from 'react'

import vertSrc from '../shaders/heroVertex.glsl?raw'
import fragSrc from '../shaders/heroFragment.glsl?raw'

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

    // ── Reduced motion: skip WebGL entirely, render a still CSS gradient ──
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    // ── WebGL2 context (falls back to WebGL1 automatically) ──────────────
    const gl = canvas.getContext('webgl2', { alpha: false })
    if (!gl) {
      console.warn('WebGL not supported — shader background disabled')
      return
    }

    // ── Compile & link shaders ───────────────────────────────────────────
    const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc)
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc)
    if (!vert || !frag) return

    const program = linkProgram(gl, vert, frag)
    if (!program) return
    gl.useProgram(program)

    // ── Full-screen quad geometry (two triangles) ────────────────────────
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
    const uTime       = gl.getUniformLocation(program, 'u_time')
    const uResolution = gl.getUniformLocation(program, 'u_resolution')
    const uMouse      = gl.getUniformLocation(program, 'u_mouse')

    // ── Mouse state (normalised 0‑1, y‑flipped) ─────────────────────────
    const mouse = { x: 0.5, y: 0.5 }
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) / rect.width
      mouse.y = 1.0 - (e.clientY - rect.top) / rect.height // flip Y
    }
    canvas.addEventListener('mousemove', onMouseMove)

    // ── Resize handling with dpr cap ─────────────────────────────────────
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
    const startTime = performance.now()

    function frame() {
      // Pause when tab is hidden to conserve GPU.
      if (document.visibilityState === 'hidden') {
        raf = requestAnimationFrame(frame)
        return
      }

      const elapsed = (performance.now() - startTime) / 1000

      gl.uniform1f(uTime, elapsed)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform2f(uMouse, mouse.x, mouse.y)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    // ── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimeout)
      canvas.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      gl.deleteProgram(program)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
      gl.deleteBuffer(vbo)
      // gl.getExtension('WEBGL_lose_context')?.loseContext() // Removed: causes issues with React Strict Mode
    }
  }, [])

  // When reduced motion is active the canvas renders nothing — the
  // section's existing bg-brand-600 from App.jsx acts as a static fallback.
  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  )
}
