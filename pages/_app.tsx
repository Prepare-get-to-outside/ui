import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import AppLayout from "@/components/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
