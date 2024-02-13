interface Variable {
  ebook?: string
  checklistPathOnS3?: string
}

export const getPdfFilePath = (variables: Variable) => variables.ebook || variables.checklistPathOnS3
