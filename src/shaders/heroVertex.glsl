#version 300 es

// Full-screen quad vertex shader.
// Receives a 2D position per vertex and forwards normalized UV coordinates
// to the fragment shader so it can paint every pixel of the canvas.

in vec2 a_position;
out vec2 v_uv;

void main() {
  // Map clip-space position (-1..1) to UV space (0..1)
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
