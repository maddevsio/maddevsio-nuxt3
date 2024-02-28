export const getCurrentDocument = (uid: string, documents: { label: string, uid: string }[]) => {
  const currentDocument = documents.find(document => document.uid === uid)
  const currentDocumentIndex = currentDocument && documents.indexOf(currentDocument)

  return {
    currentDocument,
    currentDocumentIndex,
  }
}
