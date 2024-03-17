export const createAlphabetArray = () => [...Array(26).keys()].map(n => String.fromCharCode(65 + n))
