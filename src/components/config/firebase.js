// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAxn5k4U7_HumMs0elBTbkCcWE0-mo4ff8",
  authDomain: "blessnet-hotelapp.firebaseapp.com",
  projectId: "blessnet-hotelapp",
  storageBucket: "blessnet-hotelapp.appspot.com",
  messagingSenderId: "198042884733",
  appId: "1:198042884733:web:2861d599c9ccb564c92f14",
  measurementId: "G-V3ZEGR1RNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};
