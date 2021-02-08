import { BackgroundColorProps, compose, opacity, OpacityProps, system } from 'styled-system'

const background = system({
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
})
export type TextColorProps = {
  textColor?: string
}
const textColor = system({
  textColor: {
    property: 'color',
    scale: 'colors',
  },
})
export type ColorProps = TextColorProps & BackgroundColorProps & OpacityProps
export const color = compose(background, opacity, textColor)

const dupa = {
  dupa123: 100
}

const dupaznowu = dupa.