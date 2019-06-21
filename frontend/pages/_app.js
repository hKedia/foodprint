import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import { UserSession, AppConfig } from 'blockstack';
import { configure } from 'radiks';
import { toast, Slide } from 'react-toastify';

// Config for radiks
const appConfig = new AppConfig(['store_write', 'publish_data'], process.env.RADIKS_API_SERVER);

// Current blockstack user session
const userSession = new UserSession({ appConfig });

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {
      userSession,
    };

    configure({
      apiServer: process.env.RADIKS_API_SERVER,
      userSession,
    });

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentWillMount() {
    // configure radiks server
    configure({
      apiServer: process.env.RADIKS_API_SERVER,
      userSession,
    });

    // configure react-toastify
    toast.configure({
      position: "bottom-right",
      autoClose: 5000,
      transition: Slide
    });

    // configure NProgress
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }

  render() {
    const {
      Component, pageProps,
    } = this.props;

    return (
      <ThemeProvider theme={{}}>
        <Container>
          <Component {...pageProps} serverCookies={this.props.cookies} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;