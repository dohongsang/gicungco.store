import "../assets/css/styles.css";
import "../assets/fonts/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import App from "next/app";
import Head from "next/head";
import QueryParamProvider from "../components/QueryParamsProvider";
import { RouterLoading } from "../components/RouterLoading";

import "../lib/firebase";

class Gicungco extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps };
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <QueryParamProvider>
        <Head>
          <link rel="stylesheet" type="text/css" href="/style.css" />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <RouterLoading />
        <Component {...pageProps} />
      </QueryParamProvider>
    );
  }
}

export default Gicungco;
