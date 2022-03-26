import React from "react";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
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
  );
}

export default MyApp;
