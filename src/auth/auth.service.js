// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaBUQtrUo3J0NexlDx3MLurEd1llalpiE",
  authDomain: "h8-iproject.firebaseapp.com",
  projectId: "h8-iproject",
  storageBucket: "h8-iproject.appspot.com",
  messagingSenderId: "71021927120",
  appId: "1:71021927120:web:e41454ca28fd0c33c55cd5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth();

export { auth, firebaseAuth };
