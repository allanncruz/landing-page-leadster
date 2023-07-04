import { Html, Head, Main, NextScript } from 'next/document'
import AppBar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="pt-br">
      <AppBar />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
