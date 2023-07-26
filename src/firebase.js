
import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaz2DMwfXQR8n7m0eZFgbai1nTzXPDgh4",
    authDomain: "disneyplus-clone-f2a3a.firebaseapp.com",
    projectId: "disneyplus-clone-f2a3a",
    storageBucket: "disneyplus-clone-f2a3a.appspot.com",
    messagingSenderId: "417481917355",
    appId: "1:417481917355:web:1b84463e9a80fff3bdc8ee",
    measurementId: "G-TWEL9H7QCF"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore();



export const authentication = getAuth(app);
export default db;


