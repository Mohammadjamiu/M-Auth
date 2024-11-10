// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "mern-auth-27482",
  storageBucket: "mern-auth-27482.firebasestorage.app",
  messagingSenderId: "266306692081",
  appId: "1:266306692081:web:5cf963df4524ed8351da50",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
