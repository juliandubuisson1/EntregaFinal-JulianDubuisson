// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxgfE_rBMfmnp9Bi7zCoJW0zbcc5jdQdQ",
    authDomain: "rj-julian.firebaseapp.com",
    projectId: "rj-julian",
    storageBucket: "rj-julian.appspot.com",
    messagingSenderId: "1050991712455",
    appId: "1:1050991712455:web:61723e3cb5a18b7ebc06e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
