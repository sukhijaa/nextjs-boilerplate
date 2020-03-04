import React from 'react'
import NextDocument, {Head, Main, NextScript} from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'

export default class Document extends NextDocument {
  static async getInitialProps (ctx) {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
      <Head>
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="expires" content="10800" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
}
