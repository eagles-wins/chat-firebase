// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKkfh_qNKL-h_xYqtc267HnrYOgcq5L-w",
  authDomain: "eagles-chat-de0e5.firebaseapp.com",
  projectId: "eagles-chat-de0e5",
  storageBucket: "eagles-chat-de0e5.appspot.com",
  messagingSenderId: "582084655449",
  appId: "1:582084655449:web:58deaa107c2bf2c768b448",
  measurementId: "G-HCRC79BB99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
