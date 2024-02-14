// valid simbols 0-9, +, -
export const phone = (value: string) => {
  if (!value) { return true }
  const regex = /^[0-9\s- +]*$/g
  return Boolean(value.match(regex))
}

export const fileSizeValidation = (value: File) => {
  if (!value) {
    return true
  }
  return value.size < 5000000 // max 5mb
}

export const fileExt = (value: File) => {
  if (!value) {
    return true
  }
  const re = /(\.pdf|\.doc|\.docx)$/i
  if (!re.exec(value.name)) {
    return false
  }
  return true
}

export const linkedinValidation = (value: string) => {
  if (!value) {
    return true
  }
  const lowercaseURL = value.toLowerCase()
  return lowercaseURL.includes('linkedin')
}
