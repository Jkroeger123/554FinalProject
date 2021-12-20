import '../styles/globals.css'
import NavBar from '../Components/NavBar/NavBar'
import Script from 'next/script'
import UserProvider, {useUser} from '../Components/UserContext'
import { auth } from './../Utils/firebase.js'




function MyApp({ Component, pageProps }) {
  
  return (
  <div>
    <div style={{overflowX: 'hidden'}}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  </div>
  );
}

export default MyApp
/*  <Script 
        src='https://service.force.com/embeddedservice/5.0/esw.min.js'
        strategy='afterInteractive'
        />
      <Script
        src='https://brendanoneuraflashtest-developer-edition.na139.force.com/digitalassistant/resource/chatInit'
        strategy='afterInteractive'
      />*/