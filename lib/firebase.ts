import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDobGNPSkQI9Y3L8CEysYAjL_7__d_vTTc",
  authDomain: "run-my-errands-68480.firebaseapp.com",
  projectId: "run-my-errands-68480",
  storageBucket: "run-my-errands-68480.firebasestorage.app",
  messagingSenderId: "406866613303",
  appId: "1:406866613303:web:a58587e5cf2097f49e9bb2",
  measurementId: "G-25HMPKNK4B",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);