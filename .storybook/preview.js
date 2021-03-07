import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/layout/Layout'
import { theme } from '../src/styles/theme'
import {BrowserRouter} from "react-router-dom";
import App from "../src/App";

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
      <BrowserRouter>
        {story()}
      </BrowserRouter>
  </ThemeProvider>
))

addParameters({
  options: {
    showRoots: true,
  },
})
