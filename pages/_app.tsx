import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import DefaultSection from "@/components/DefaultSection";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultSection>
      <Component {...pageProps} />
    </DefaultSection>
  );
}

export default MyApp;
