//Default Document for all pages, useful for <head> 
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document 
{
  render() 
  {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
