import { markRaw } from 'vue'
import {
  type IMainStartScreen,
  type IMainStartScreenPropTypes,
} from '~/components/PageBlocks/StartScreen/interfaces/IMainStartScreen'

export class MainStartScreen implements IMainStartScreen {
  // public modalContactMeRef;
  public reformattedDescription
  public reformattedTitle
  public reformattedSubtitle
  public image
  public buttonText

  constructor(props: IMainStartScreenPropTypes) {
    // this.modalContactMeRef = ref(null);
    this.reformattedDescription = this.reformatToHtml(props.primary?.description[0]?.text)
    this.reformattedTitle = this.reformatToHtml(props.primary?.title)
    this.reformattedSubtitle = this.reformatToHtml(props.primary?.subtitle)
    this.image = props.primary.image
    this.buttonText = props.primary.buttonText || 'Let`s Talk'

    this.showModal = this.showModal.bind(this)
    this.reformatToHtml = this.reformatToHtml.bind(this)

    markRaw(this)
  }

  showModal() {
    console.log('Modal Opened')
    // if (!this.modalContactMeRef?.value?.show) return;
    // this.modalContactMeRef?.value?.show();
    // contactMeClickEvent.send('Main start screen component');
  }

  reformatToHtml = (text: string) => text && text.replace(/\n/g, '<br />')
}
