import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx04npzyr0-IGPpNO5PFrFymK65haTeeU",
  authDomain: "house-marketplace-db-f1ea7.firebaseapp.com",
  projectId: "house-marketplace-db-f1ea7",
  storageBucket: "house-marketplace-db-f1ea7.appspot.com",
  messagingSenderId: "550423544652",
  appId: "1:550423544652:web:7fe7f12b30fcef977285e9",
  measurementId: "G-RLS8YBMN89",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
