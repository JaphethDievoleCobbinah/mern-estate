// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7eda8.firebaseapp.com",
  projectId: "mern-estate-7eda8",
  storageBucket: "mern-estate-7eda8.firebasestorage.app",
  messagingSenderId: "75067448566",
  appId: "1:75067448566:web:5bcf7d8fd190c08da3a0d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);