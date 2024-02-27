import type {
  IWorkPrinciplesWithFormDefault, WorkPrinciplesWithFormDefaultProps, WorkPrinciplesWithFormListItem,
} from '~/components/PageBlocks/WorkPrinciplesWithForm/interfaces/IWorkPrinciplesWithFormDefault'

export class WorkPrinciplesWithFormDefault implements IWorkPrinciplesWithFormDefault {
  colorTheme: string
  formTitle: string
  formButtonText: string
  listTitle: string[]
  listItems: WorkPrinciplesWithFormListItem[]
  backgroundColorClass: string

  constructor(props: WorkPrinciplesWithFormDefaultProps) {
    this.colorTheme = props.primary?.colorTheme
    this.formTitle = props.primary?.formTitle
    this.formButtonText = props.primary?.buttonText
    this.listTitle = props.primary?.listTitle.split('\n')
    this.listItems = props.items
    this.backgroundColorClass = `work-principles-with-form--${ this.colorTheme }`
  }
}
