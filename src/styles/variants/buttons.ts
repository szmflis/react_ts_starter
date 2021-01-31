import { darken } from 'polished'
import colors from '../colors'

export default {
  primary: {
    background: colors.primary,
    '&:hover': {
      background: darken(0.1, colors.primary),
    },
  },
  secondary: {
    background: colors.primaryLight,
    '&:hover': {
      background: darken(0.1, colors.primaryLight),
    },
  },
  cancel: {
    background: colors.danger,
    '&:hover': {
      background: darken(0.1, colors.danger),
    },
  },
  transparent: {
    background: 'inherit',
    '&:hover': {
      background: darken(0.1, colors.white),
    },
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
