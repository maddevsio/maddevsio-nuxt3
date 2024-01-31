// import type { Ref, VueElement } from 'vue';

export interface IMainStartScreen {
  // modalContactMeRef: Ref<VueElement | null>;
  reformattedDescription: string
  reformattedTitle: string
  reformattedSubtitle: string
  image: {
    url: string
    alt: string
    dimensions: {
      width: number
      height: number
    }
  }
  buttonText: string
  showModal: () => void
  reformatToHtml: (text: string) => string
}

export interface IMainStartScreenPropTypes {
  primary: {
    description: Array<{ text: string }>
    title: string
    subtitle: string
    image: {
      url: string
      alt: string
      dimensions: {
        width: number
        height: number
      }
    }
    buttonText: string
  }
}
