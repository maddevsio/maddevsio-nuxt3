export const transformGlossaryWords = (pages: any[]) => pages.map(result => ({
  wordTitle: result.data.word_title,
  wordUID: result.uid,
  tags: result.tags.filter((tag: string) => tag !== 'Glossary').filter((tag: string) => !tag.includes('Words')),
}))
