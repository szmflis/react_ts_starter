import { BackgroundColorProps, compose, opacity, OpacityProps, system } from 'styled-system'

/* Overriding default property names from styled system */

/* bg instead of backgroundColor */
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

/* textColor instead of color */
const textColor = system({
  textColor: {
    property: 'color',
    scale: 'colors',
  },
})
export type ColorProps = TextColorProps & BackgroundColorProps & OpacityProps
export const color = compose(background, opacity, textColor)
