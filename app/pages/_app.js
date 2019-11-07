import 'isomorphic-unfetch';
import * as React from 'react';
import App from 'next/app';
import { ClientContextProvider } from 'react-fetching-library';
import httpService from '../config/http-service';

class AppRoot extends App {
  static async getInitialProps(appContext) {
    let appProps = {};

    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps(appContext);
    }

    return {
      ...appProps,
      cacheItems: httpService.cache.getItems(),
    };
  }

  render() {
    const { Component, pageProps, cacheItems } = this.props;
    httpService.cache.setItems(cacheItems);

    return (
      <ClientContextProvider client={httpService}>
        <Component {...pageProps} />
      </ClientContextProvider>
    );
  }
}

export default AppRoot;
