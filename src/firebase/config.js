import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANaGGAxK5na-svgbzuP6Q-GCIO6xJaw9E",
  authDomain: "tiptak-1e82c.firebaseapp.com",
  projectId: "tiptak-1e82c",
  storageBucket: "tiptak-1e82c.appspot.com",
  messagingSenderId: "135315870195",
  appId: "1:135315870195:web:b18e0eaed4ddf480b18286"
};

// Inicializar App
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)