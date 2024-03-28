export const setSliceGradient = (color: string) => {
  switch (color) {
  case 'grey': return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #f5f7f9)'
  case 'black': return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213)'
  case 'white': return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #ffffff)'
  default: return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213)'
  }
}
