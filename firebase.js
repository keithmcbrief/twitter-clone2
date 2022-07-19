// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSksZtbHsZ8itB0yMlYPFkE_q3Js6vo2w",
  authDomain: "twitter-redeploy.firebaseapp.com",
  projectId: "twitter-redeploy",
  storageBucket: "twitter-redeploy.appspot.com",
  messagingSenderId: "755605939754",
  appId: "1:755605939754:web:5c60b0742900c967774553"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };