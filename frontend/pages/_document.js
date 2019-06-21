import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();
    return { ...initialProps, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/static/nprogress.css" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link rel='stylesheet' href="/static/ReactToastify.css" />
          <script src="/static/nprogress.js" />
          {this.props.styleTags}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}