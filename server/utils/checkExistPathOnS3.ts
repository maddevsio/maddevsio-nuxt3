interface Variable {
  ebook?: string
  checklistPathOnS3?: string
}

export const checkExistPathOnS3 = (variables: Variable) => Boolean(variables.ebook || variables.checklistPathOnS3)
