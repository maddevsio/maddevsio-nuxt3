import type { IGlossaryWord } from '~/components/Glossary/interfaces/IGlossaryWord'

export const mergeAndSortGlossaryWords = (obj1: Record<string, IGlossaryWord[]>, obj2: Record<string, IGlossaryWord[]>): Record<string, IGlossaryWord[]> => {
  const sortedObj: Record<string, IGlossaryWord[]> = {};

  Object.keys(obj1).forEach(key => {
    sortedObj[key] = [...(obj1[key] || []), ...(obj2[key] || [])];
  });

  Object.keys(sortedObj).forEach(key => {
    sortedObj[key] = sortedObj[key]
      .sort((a, b) => a.wordTitle.localeCompare(b.wordTitle))
      .reduce((acc: IGlossaryWord[], obj: IGlossaryWord) => {
        if (!acc.some((word: IGlossaryWord) => word.wordUID === obj.wordUID && word.wordTitle === obj.wordTitle)) {
          acc.push(obj);
        }
        return acc;
      }, []);
  });

  return sortedObj;
};
