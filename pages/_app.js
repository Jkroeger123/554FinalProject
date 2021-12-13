import '../styles/globals.css'
import NavBar from '../Components/NavBar/NavBar'

function MyApp({ Component, pageProps }) {
  return (<div style={{overflowX: 'hidden'}}>
    <NavBar />
    <Component {...pageProps} />
  </div>);
}

export default MyApp
