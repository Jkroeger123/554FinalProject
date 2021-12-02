//USED FOR CLIENT SIDE
import { initializeApp, getApp, getApps } from "@firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZ_0mTbKFw0jIxyePAdU9A2BkIAs52pzE",
    authDomain: "u-marketplace-19a06.firebaseapp.com",
    projectId: "u-marketplace-19a06",
    storageBucket: "u-marketplace-19a06.appspot.com",
    messagingSenderId: "73038711698",
    appId: "1:73038711698:web:13a79dfd685bba04758f4b"
};

console.log(process.env.REACT_APP_FIREBASE_APIKEY);

/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSASGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};*/

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
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
    auth.signOut();
};

export {
    auth,
    signInWithGoogle,
    logout,
};