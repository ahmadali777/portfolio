#version 300 es
precision highp float;

// ─── Uniforms ────────────────────────────────────────────────────────────────
// u_time       – seconds elapsed since mount
// u_resolution – canvas size in pixels
// u_mouse      – cursor position normalised 0‑1 (y flipped)
// u_ripplePos  – click positions for up to 16 ripples (normalised 0‑1)
// u_rippleTime – click timestamps for each ripple
// u_rippleCount – number of active ripples

uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;

#define MAX_RIPPLES 16
uniform vec2  u_ripplePos[MAX_RIPPLES];
uniform float u_rippleTime[MAX_RIPPLES];
uniform int   u_rippleCount;

// ─── Output ──────────────────────────────────────────────────────────────────
out vec4 fragColor;
in vec2 v_uv;

// ─── Brand palette ───────────────────────────────────────────────────────────
const vec3 COLOR_DARK   = vec3(0.051, 0.106, 0.165); // #0d1b2a  brand-600
const vec3 COLOR_MID    = vec3(0.102, 0.149, 0.231); // #1b263b  brand-500
const vec3 COLOR_ACCENT = vec3(0.255, 0.353, 0.467); // #415a77  brand-400
const vec3 COLOR_LIGHT  = vec3(0.455, 0.639, 0.831); // #74a3d4  brand-900

// ─── Utility: pseudo-random hash ─────────────────────────────────────────────
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

// ─── Utility: value noise ────────────────────────────────────────────────────
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// ─── Ripple wave function ────────────────────────────────────────────────────
// Creates concentric rings expanding outward from a click point.
// dist: aspect‑corrected distance from pixel to click centre
// age:  time in seconds since the click happened
float rippleWave(float dist, float age) {
  // Ring speed and wavelength
  float speed    = 0.35;
  float wavelength = 0.18;

  // Expanding ring radius
  float radius = age * speed;

  // Distance from pixel to the current ring edge
  float ring = abs(dist - radius);

  // Sharpness of each ring — tighter = crisper lines
  float sharpness = 35.0;
  float wave = exp(-ring * sharpness);

  // Secondary harmonic for richer water look
  float radius2 = age * speed * 0.7;
  float ring2   = abs(dist - radius2);
  wave += exp(-ring2 * sharpness * 0.6) * 0.35;

  // Fade envelope: quick fade‑in, hold, then fade‑out over ~3s
  float fadeIn  = smoothstep(0.0, 0.05, age);
  float fadeOut = 1.0 - smoothstep(0.3, 3.0, age);
  wave *= fadeIn * fadeOut;

  // Amplitude attenuation as ring expands
  wave *= 1.0 / (1.0 + dist * 4.0);

  return wave;
}

// ─── Main ────────────────────────────────────────────────────────────────────
void main() {
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  // Aspect‑corrected UV for distance calculations (circles stay round)
  vec2 uvAspect    = vec2(uv.x * aspect, uv.y);
  vec2 mouseAspect = vec2(u_mouse.x * aspect, u_mouse.y);

  // Mouse proximity — subtle glow near cursor
  float mouseDist  = length(uvAspect - mouseAspect);
  float mouseBoost = smoothstep(0.7, 0.0, mouseDist);

  // ── Base water waves (ambient, always moving) ──────────────────────────
  float t = u_time * 0.15;

  // Layer 1: broad drifting waves
  float wave1 = sin(uvAspect.x * 3.0 + t * 1.2
                    + sin(uvAspect.y * 2.0 + t * 0.7) * 1.5) * 0.5 + 0.5;

  // Layer 2: perpendicular waves
  float wave2 = cos(uvAspect.y * 4.0 - t * 0.9
                    + cos(uvAspect.x * 2.5 + t * 0.5) * 1.2) * 0.5 + 0.5;

  // Layer 3: fine‑scale texture
  float wave3 = sin((uvAspect.x + uvAspect.y) * 5.0 + t * 2.0) * 0.5 + 0.5;

  // Noise layer for organic feel
  float n = noise(uvAspect * 3.0 + vec2(t * 0.4, t * 0.3));

  // Base intensity from ambient waves
  float intensity = wave1 * 0.35 + wave2 * 0.25 + wave3 * 0.08 + n * 0.12;

  // ── Click ripples ──────────────────────────────────────────────────────
  float rippleTotal = 0.0;

  for (int i = 0; i < MAX_RIPPLES; i++) {
    if (i >= u_rippleCount) break;

    float age = u_time - u_rippleTime[i];
    if (age < 0.0 || age > 3.5) continue;

    vec2 rippleCentre = vec2(u_ripplePos[i].x * aspect, u_ripplePos[i].y);
    float dist = length(uvAspect - rippleCentre);

    rippleTotal += rippleWave(dist, age);
  }

  // Blend ripples into the intensity
  intensity += rippleTotal * 0.45;
  intensity = clamp(intensity, 0.0, 1.0);

  // ── Colour mapping ─────────────────────────────────────────────────────
  vec3 colour = mix(COLOR_DARK, COLOR_MID,    smoothstep(0.1, 0.55, intensity));
  colour      = mix(colour,     COLOR_ACCENT, smoothstep(0.55, 0.82, intensity));
  colour      = mix(colour,     COLOR_LIGHT,  smoothstep(0.85, 1.0,  intensity));

  // Mouse cursor glow
  colour += COLOR_LIGHT * mouseBoost * 0.06;

  // ── Vignette ───────────────────────────────────────────────────────────
  float vignette = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.6);
  colour *= mix(0.5, 1.0, vignette);

  fragColor = vec4(colour, 1.0);
}
