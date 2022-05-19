import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5v9fRU56FEoXeCozyacEaF51noE38vIY",
  authDomain: "modern-react-app-9d0a7.firebaseapp.com",
  projectId: "modern-react-app-9d0a7",
  storageBucket: "modern-react-app-9d0a7.appspot.com",
  messagingSenderId: "94712966631",
  appId: "1:94712966631:web:616df675ab3228fa94e142",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export {db,auth};