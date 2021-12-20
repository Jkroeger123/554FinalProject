//USED FOR CLIENT SIDE
import { initializeApp, getApp, getApps } from "@firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from '@firebase/auth';
import axios from 'axios';

const firebaseConfig = {
    apiKey: "AIzaSyCZ_0mTbKFw0jIxyePAdU9A2BkIAs52pzE",
    authDomain: "u-marketplace-19a06.firebaseapp.com",
    projectId: "u-marketplace-19a06",
    storageBucket: "u-marketplace-19a06.appspot.com",
    messagingSenderId: "73038711698",
    appId: "1:73038711698:web:13a79dfd685bba04758f4b"
};

if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
 }else {
    getApp(); // if already initialized, use that one
 }


const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;

    //Check if user is in database : If not, add them.
    let idToken = await auth.currentUser.getIdToken();
    window.localStorage.setItem('token', idToken);
    window.localStorage.setItem('name', user.displayName);
    window.localStorage.setItem('email', user.email);
    console.log(user);
    let newUser = await axios.post('/api/createUser', {
      idToken,
      user
    })

    return newUser;
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
    auth.signOut();
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('name');
};



export {
    auth,
    signInWithGoogle,
    logout,
};