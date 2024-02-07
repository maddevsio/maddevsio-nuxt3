export const createUID = (text: string) => text ? text.toString().toLowerCase().split(' ').join('-') : text
