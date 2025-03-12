// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2HsVoYztmi9cnVAi_PpnEmFh7V7oZ4d0",
  authDomain: "swiggy-e986c.firebaseapp.com",
  projectId: "swiggy-e986c",
  storageBucket: "swiggy-e986c.firebasestorage.app",
  messagingSenderId: "133090279938",
  appId: "1:133090279938:web:8606de7158536ccc3c5d1b",
  measurementId: "G-01C2K7F1NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);