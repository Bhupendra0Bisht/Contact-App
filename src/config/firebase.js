// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaMT7BYFYCE9WshwvM9rkH2WpIUs7OoTA",
  authDomain: "vite-contact-d8299.firebaseapp.com",
  projectId: "vite-contact-d8299",
  storageBucket: "vite-contact-d8299.firebasestorage.app",
  messagingSenderId: "988463759900",
  appId: "1:988463759900:web:88d929776d6c4b42ebd5d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)