import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvISKeArHrt5ArS9c_Mh1dja6cEkUjPfg",
  authDomain: "mealstogo-1f2ac.firebaseapp.com",
  projectId: "mealstogo-1f2ac",
  storageBucket: "mealstogo-1f2ac.firebasestorage.app",
  messagingSenderId: "430373713532",
  appId: "1:430373713532:web:05f936a4f760f7f5987bf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export function LoginRequest(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function RegisterRequest(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
