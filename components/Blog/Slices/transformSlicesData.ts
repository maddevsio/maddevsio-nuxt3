type ComponentMappingType = {
  [key: string]: any
}

export interface SliceObject {
  primary: object
  items: any[]
  id: string
  slice_type: string
  slice_label: null
  variation?: string
}

export const transformSlicesData = (slices: SliceObject[], componentsMapping: ComponentMappingType) => slices.map(item => {
  const componentName = item.variation ? componentsMapping[item.slice_type][item.variation] : componentsMapping[item.slice_type]
  if (!componentName) {
    // eslint-disable-next-line no-console
    console.warn(`Component for ${ item.slice_type } slice not found in mapping`)
  }
  return {
    ...item,
    componentName,
  }
}).filter(slice => slice.componentName)
