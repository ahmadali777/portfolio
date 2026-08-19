#version 300 es
precision highp float;

// ─── Uniforms ────────────────────────────────────────────────────────────────
// u_time       – seconds elapsed since mount, drives continuous motion.
// u_resolution – canvas size in pixels, used to correct aspect ratio.
// u_mouse      – cursor position normalised to 0‑1 (y flipped so 0 = top).

uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;

// ─── Output ──────────────────────────────────────────────────────────────────
out vec4 fragColor;
in vec2 v_uv;

// ─── Brand palette ───────────────────────────────────────────────────────────
// Mapped directly from the Tailwind @theme values in index.css.
const vec3 COLOR_DARK   = vec3(0.051, 0.106, 0.165); // #0d1b2a  brand-600
const vec3 COLOR_MID    = vec3(0.102, 0.149, 0.231); // #1b263b  brand-500
const vec3 COLOR_ACCENT = vec3(0.255, 0.353, 0.467); // #415a77  brand-400
const vec3 COLOR_LIGHT  = vec3(0.455, 0.639, 0.831); // #74a3d4  brand-900

// ─── Utility: pseudo-random hash ─────────────────────────────────────────────
// Maps a 2D input to a deterministic float in 0..1 — used for subtle noise.
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

// ─── Utility: value noise ────────────────────────────────────────────────────
// Smoothly interpolates random values at integer grid points.
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);          // smoothstep interpolation

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// ─── Main ────────────────────────────────────────────────────────────────────
void main() {
  // 1. UV setup — correct for aspect ratio so circles stay round.
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 uvAspect = vec2(uv.x * aspect, uv.y);

  // 2. Mouse influence — computes a radial falloff centred on the cursor.
  //    The mouse position is converted to aspect‑corrected space too.
  vec2 mouseAspect = vec2(u_mouse.x * aspect, u_mouse.y);
  float mouseDist  = length(uvAspect - mouseAspect);
  float mouseBoost = smoothstep(0.7, 0.0, mouseDist); // soft radial pull

  // 3. Time‑based wave layers — multiple sine/cosine octaves create
  //    an organic, liquid‑aurora motion.
  float t = u_time * 0.15; // slow the base speed for elegance

  // Layer 1: broad horizontal waves that drift upward
  float wave1 = sin(uvAspect.x * 3.0 + t * 1.2
                    + sin(uvAspect.y * 2.0 + t * 0.7) * 1.5) * 0.5 + 0.5;

  // Layer 2: perpendicular waves with different frequency
  float wave2 = cos(uvAspect.y * 4.0 - t * 0.9
                    + cos(uvAspect.x * 2.5 + t * 0.5) * 1.2) * 0.5 + 0.5;

  // Layer 3: fast, small‑scale ripple for texture
  float wave3 = sin((uvAspect.x + uvAspect.y) * 5.0 + t * 2.0) * 0.5 + 0.5;

  // 4. Noise layer — adds organic irregularity to the clean waves.
  float n = noise(uvAspect * 3.0 + vec2(t * 0.4, t * 0.3));

  // 5. Mouse distortion — shift wave phase toward the cursor.
  wave1 += mouseBoost * 0.35;
  wave2 += mouseBoost * 0.25;

  // 6. Combine waves into a single intensity value (0..1).
  float intensity = wave1 * 0.45 + wave2 * 0.30 + wave3 * 0.10 + n * 0.15;

  // 7. Colour mapping — blend the brand palette based on intensity.
  //    Adjusted thresholds to keep it mostly deep navy, with subtle peaks of accent.
  vec3 colour = mix(COLOR_DARK, COLOR_MID,    smoothstep(0.1, 0.6, intensity));
  colour      = mix(colour,     COLOR_ACCENT, smoothstep(0.65, 0.9, intensity));
  colour      = mix(colour,     COLOR_LIGHT,  smoothstep(0.9, 1.0, intensity));

  // 8. Mouse glow — add a subtle bright bloom near the cursor.
  colour += COLOR_LIGHT * mouseBoost * 0.08;

  // 9. Vignette — darken the edges to naturally frame the hero text.
  float vignette = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.6);
  colour *= mix(0.55, 1.0, vignette);

  fragColor = vec4(colour, 1.0);
}
