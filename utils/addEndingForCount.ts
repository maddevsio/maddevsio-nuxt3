interface Count {
  one: string;
  plural: string;
}

interface CountMap {
  post: Count;
  writeup: Count;
  word: Count;
}

const countMap: CountMap = {
  post: {
    one: 'Post',
    plural: 'Posts',
  },
  writeup: {
    one: 'Write-up',
    plural: 'Write-ups',
  },
  word: {
    one: 'Technical term',
    plural: 'Technical terms',
  },
};

export const checkCountForEnding = (type: keyof CountMap, count: number): string => {
  if (count === 1) {
    return `${ count } ${ countMap[type].one }`;
  }
  return `${ count } ${ countMap[type].plural }`;
};
