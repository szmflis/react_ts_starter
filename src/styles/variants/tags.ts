import { darken } from 'polished'
import colors from '../colors'

export default {
  primary: {
    background: colors.primary,
    color: colors.white,
    '&:hover': {
      background: darken(0.1, colors.primary),
    },
  },
  secondary: {
    background: colors.primaryLight,
    color: colors.white,
    '&:hover': {
      background: darken(0.1, colors.primaryLight),
    },
  },
  warning: {
    background: colors.warning,
    color: colors.black,
    '&:hover': {
      background: darken(0.1, colors.warning),
    },
  },
  success: {
    background: colors.success,
    color: colors.white,
    '&:hover': {
      background: darken(0.1, colors.success),
    },
  },
  cancel: {
    background: colors.danger,
    color: colors.black,
    '&:hover': {
      background: darken(0.1, colors.danger),
    },
  },
  transparent: {
    background: 'inherit',
    border: '1px solid black',
    color: colors.black,
  },
  disabled: {
    cursor: 'inherit',
    background: colors.disabled,
    '&:hover': {
      background: colors.disabled,
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
}
