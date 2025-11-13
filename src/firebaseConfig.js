// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEYo_sVAlCnhSArWMEv9ohWjr2k9nxPOQ",
  authDomain: "kasukabe-2e710.firebaseapp.com",
  projectId: "kasukabe-2e710",
  storageBucket: "kasukabe-2e710.firebasestorage.app",
  messagingSenderId: "80766335641",
  appId: "1:80766335641:web:87c261b8c99e5ea2ea1608",
  measurementId: "G-WMD57PGJRQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);


