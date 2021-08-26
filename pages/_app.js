import Head from 'next/head';
import "../style/style.css"

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
