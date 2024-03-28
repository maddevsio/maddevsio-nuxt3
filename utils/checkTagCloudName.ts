export const checkTagCloudName = (tag: string) => {
  if (tag === 'All Cases') { return 'Case studies' }
  if (tag === 'All Write-ups') { return 'Writeup' }
  if (tag === 'All Checklists') { return 'Checklist' }
  return tag
}
