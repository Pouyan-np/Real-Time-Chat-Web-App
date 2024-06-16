import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCR-M1jpHebwFYs8ws-hCS9KI5-6CuuihM",
  authDomain: "univrchat24.firebaseapp.com",
  databaseURL: "https://univrchat24-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "univrchat24",
  storageBucket: "univrchat24.appspot.com",
  messagingSenderId: "874712175007",
  appId: "1:874712175007:web:1b48fc3785228acdcd6daa",
  measurementId: "G-Y5L0FQBZ10"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
