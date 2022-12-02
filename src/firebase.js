// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFy_n9SOtCH_ya_wIrkpFqLMCT2oSEI_U",
  authDomain: "graceproject-ace60.firebaseapp.com",
  projectId: "graceproject-ace60",
  storageBucket: "graceproject-ace60.appspot.com",
  messagingSenderId: "859631540850",
  appId: "1:859631540850:web:2ae81f938f7590b97d40eb",
  measurementId: "G-0L9QFGLDKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app