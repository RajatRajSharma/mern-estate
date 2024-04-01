// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7861f.firebaseapp.com",
  projectId: "mern-estate-7861f",
  storageBucket: "mern-estate-7861f.appspot.com",
  messagingSenderId: "431830383460",
  appId: "1:431830383460:web:c97b8725aff6cc3c6d5871"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);