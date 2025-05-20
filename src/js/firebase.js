import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiTgZcOD8xt5Jc38QFTqPGdPXajA2V2b4",
  authDomain: "noteballs-2c03c.firebaseapp.com",
  projectId: "noteballs-2c03c",
  storageBucket: "noteballs-2c03c.firebasestorage.app",
  messagingSenderId: "326290299844",
  appId: "1:326290299844:web:5b475dc40909746eb56291",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
