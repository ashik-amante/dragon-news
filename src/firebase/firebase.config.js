// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhXGOvRen3EdOs-pSaaRsRkHvvMFM_C_8",
  authDomain: "dragon-news-auth-b1c63.firebaseapp.com",
  projectId: "dragon-news-auth-b1c63",
  storageBucket: "dragon-news-auth-b1c63.firebasestorage.app",
  messagingSenderId: "677726133890",
  appId: "1:677726133890:web:34d4fc17c576beeca55e9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;