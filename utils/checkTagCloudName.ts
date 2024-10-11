export const checkTagCloudName = (tag: string, allTag: string, contentType: string) => {
  if (tag && tag.toLowerCase() === allTag.toLowerCase() &&
    ['Case studies', 'Writeup', 'Checklist'].includes(contentType)) {
    return contentType;
  }
  return tag;
}
