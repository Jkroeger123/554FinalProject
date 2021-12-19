import '../styles/globals.css'
import NavBar from '../Components/NavBar/NavBar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>U Marketplace</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div style={{overflowX: 'hidden'}}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  </>
  );
}

export default MyApp
