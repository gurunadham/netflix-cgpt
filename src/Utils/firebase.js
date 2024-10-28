// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz8cRNejIv_p-AjUPpcbUSRa0bHpjX9cY",
  authDomain: "netflix-cgpt-70417.firebaseapp.com",
  projectId: "netflix-cgpt-70417",
  storageBucket: "netflix-cgpt-70417.appspot.com",
  messagingSenderId: "956134683061",
  appId: "1:956134683061:web:756285e8932b0e86b369fc",
  measurementId: "G-LCEB0MRXDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();