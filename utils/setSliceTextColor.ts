export const setSliceTextColor = (textColor: string) => {
  switch (textColor) {
  case 'white': {
    return '#ffffff'
  }
  case 'grey': {
    return '#707072'
  }
  case 'silver': {
    return '#f4f4f4'
  }
  case 'black': {
    return '#111111'
  }
  case 'red': {
    return '#EC1C24'
  }
  case 'blue': {
    return '#5159F6'
  }
  case 'yellow': {
    return '#F7C744'
  }
  case 'purple': {
    return '#9963F6'
  }
  case 'green': {
    return '#00C05B'
  }
  default:
    return '#111111'
  }
}
