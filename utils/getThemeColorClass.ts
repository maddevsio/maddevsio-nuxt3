export const getThemeColorClass = (className: string, themeColor: string) => (
  themeColor === 'black'
    ? `${ className }--black-theme`
    : `${ className }--white-theme`
)
