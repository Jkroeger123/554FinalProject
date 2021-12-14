import '../styles/globals.css'
import NavBar from '../Components/NavBar/NavBar'
import Listings from '../pages/home/listings'

function MyApp({ Component, pageProps }) {
  return (<div style={{overflowX: 'hidden'}}>
    <NavBar />
    <Component {...pageProps} />
    <Listings />
  </div>);
}

export default MyApp
