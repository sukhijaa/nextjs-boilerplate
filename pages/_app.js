import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import {appWithTranslation} from 'translations/i18n';
import createStore from 'store/configureStore';
import {DefaultSeo, ArticleJsonLd} from 'next-seo';
import {JsonLDDefaultConfig, OGDefaultConfig} from 'seo';

class ExampleApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ctx});
    }

    return {pageProps};
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <Provider store={store}>
        <DefaultSeo {...OGDefaultConfig} />
        <ArticleJsonLd {...JsonLDDefaultConfig} />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(
  withReduxSaga(appWithTranslation(ExampleApp)),
);
