import GlobalStyle from '@/styles/global'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
    <GlobalStyle />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
