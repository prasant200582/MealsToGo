import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuGcKja5WXjN-9uXPy2TbVvG8-iR-o_Y4",
  authDomain: "mealstogo-5f2ad.firebaseapp.com",
  projectId: "mealstogo-5f2ad",
  storageBucket: "mealstogo-5f2ad.appspot.com",
  messagingSenderId: "354900039718",
  appId: "1:354900039718:web:49b4636baac97a3872eee7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logoutRequest = () => signOut(auth);

