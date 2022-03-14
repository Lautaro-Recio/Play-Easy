// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFRlya8Bk5Ae-kv3fL9kS2dHYmsk5zoSM",
  authDomain: "play-easy-c597f.firebaseapp.com",
  projectId: "play-easy-c597f",
  storageBucket: "play-easy-c597f.appspot.com",
  messagingSenderId: "69568311079",
  appId: "1:69568311079:web:97c49eb10d683fbff6c302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase= getFirestore(app)
export const auth= getAuth()
export const googleProvider = new GoogleAuthProvider()
auth.useDeviceLanguage()