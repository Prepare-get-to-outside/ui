import React from 'react';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { createTheme } from '@mui/material';

export default function MyApp({ Component, pageProps }: AppProps) {
    const theme = createTheme({
        palette: {
          secondary: {
            main: "#F8E9A1",
          },
          primary: {
            main: "#24305E",
          },
        },
      });
      
    return (
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
  )
}