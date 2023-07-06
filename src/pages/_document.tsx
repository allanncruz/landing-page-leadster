import Document, { DocumentContext, DocumentInitialProps, Html } from 'next/document'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <Html lang='pt-br'>
            <head>
              <title>Landing page Leadsters</title>
              <meta name="description" content="Desafio Frontend Leadster" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </head>
            <main>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </main>
          </Html>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
