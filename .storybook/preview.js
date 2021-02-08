import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/layout/Layout'
import { theme } from '../src/styles/theme'

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
))

addParameters({
  options: {
    showRoots: true,
  },
})
