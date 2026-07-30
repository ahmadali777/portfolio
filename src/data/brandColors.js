export const brandColors = {
  50: '#f8f7f2ff',
  100: '#e0e1ddff',
  200: '#e3e8eeff',
  300: '#778da9ff',
  400: '#415a77ff',
  500: '#1b263bff',
  600: '#0d1b2aff',
  700: '#234870ff',
  800: '#3875b6ff',
  900: '#74a3d4ff',
}

export function brandBg(accent) {
  return { backgroundColor: brandColors[accent] ?? brandColors[600] }
}
