export const useStyleFormElement = () => {
  const defaultStyles = useCssModule()
  const customStyles = inject('styles')
  const getStyles = () => customStyles || defaultStyles
  const styles = getStyles()

  return {
    styles,
  }
}
