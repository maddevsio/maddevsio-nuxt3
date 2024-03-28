import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'

export const sortGlossaryWords = (words: IGlossaryWord[]) => {
  const grouped = words.reduce((acc: any, word: IGlossaryWord) => {
    const firstLetter = word?.wordTitle[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(word)
    return acc
  }, {})

  for (const key in grouped) {
    grouped[key].sort((a: IGlossaryWord, b: IGlossaryWord) => a.wordTitle.localeCompare(b.wordTitle))
  }

  const sortedKeys = Object.keys(grouped).sort((a, b) => a.localeCompare(b))
  const sortedObject = Object.fromEntries(sortedKeys.map(key => [key, grouped[key]]))

  return sortedObject
}
