// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPCE8TN8gY42mkMTX_0e9Z6ICIwlqFmOY",
  authDomain: "grace-c8587.firebaseapp.com",
  projectId: "grace-c8587",
  storageBucket: "grace-c8587.appspot.com",
  messagingSenderId: "224645661402",
  appId: "1:224645661402:web:cc0aa4f57fb0b54a901be3",
  measurementId: "G-CYG5WTQZGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app