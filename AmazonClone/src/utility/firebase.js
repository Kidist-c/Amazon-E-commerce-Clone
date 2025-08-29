// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth';
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt_6uUeUcmax-2vgfpf0UyQ4b_-Aij4WA",
  authDomain: "clone-2bd58.firebaseapp.com",
  projectId: "clone-2bd58",
  storageBucket: "clone-2bd58.firebasestorage.app",
  messagingSenderId: "711008894384",
  appId: "1:711008894384:web:8f799b1c872eb5f94f2a75"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore();