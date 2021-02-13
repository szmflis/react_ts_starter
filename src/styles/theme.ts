import colors from './colors'
import typography from './typography'
import layout from './layout'
import buttons from './variants/buttons'
import icons from './variants/icons'
import effects from './effects'
import keyframes from './keyframes'
import shadows from './shadows'

export const theme = {
  colors,
  ...typography,
  ...layout,
  effects,
  keyframes,
  shadows,
  buttons,
  icons,
}

export type Theme = typeof theme
