import 'antd/dist/antd.css'
import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app' /*, AppContext */
import { Frame } from '../src/components'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  const { layoutProps, ...rest } = pageProps

  return (
    <ThemeProvider theme={theme}>
      <Frame layoutProps={pageProps?.layoutProps}>
        <Component {...rest} />
      </Frame>
    </ThemeProvider>
  )
}

export default App
