import type { ComputedRef } from 'vue'

export interface ButtonFullFilledProps {
  primary: {
    alignment: string
    background: string
    link: {
      url: string
    }
    maxWidth: string | number
    text: string
    target: string
    fullWidth: boolean
  }
}

export interface IButtonFullFilled {
  alignment: ComputedRef<string>
  backgroundColor: string | null
  link: string
  maxWidth: string | number
  text: string
  target: string
  fullWidth: boolean
}
