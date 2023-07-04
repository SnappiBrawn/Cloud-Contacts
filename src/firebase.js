// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloud-contacts-131eb.firebaseapp.com",
  databaseURL: "https://cloud-contacts-131eb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cloud-contacts-131eb",
  storageBucket: "cloud-contacts-131eb.appspot.com",
  messagingSenderId: "295767171434",
  appId: "1:295767171434:web:0876ab872c501ca0674513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);