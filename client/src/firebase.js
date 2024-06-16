// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bb-website-98d1c.firebaseapp.com",
  projectId: "bb-website-98d1c",
  storageBucket: "bb-website-98d1c.appspot.com",
  messagingSenderId: "481196732090",
  appId: "1:481196732090:web:d27eb6ff43e2de59575c83",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
