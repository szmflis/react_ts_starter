import colors from './colors'
import typography from './typography'
import layout from './layout'
import buttons from './variants/buttons'
import effects from './effects'
import keyframes from './keyframes'
import shadows from './shadows'

export const theme = {
  colors,
  ...typography,
  ...layout,
  buttons,
  effects,
  keyframes,
  shadows,
}

export type Theme = typeof theme
