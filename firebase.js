import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDocs, collection, setDoc, query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmZiwKF-fjLlK2SZxlmZw8LEBNvWf3SVs",
    authDomain: "hspantryapp-cc214.firebaseapp.com",
    projectId: "hspantryapp-cc214",
    storageBucket: "hspantryapp-cc214.appspot.com",
    messagingSenderId: "915396935742",
    appId: "1:915396935742:web:bca08927b01e90e660116f",
    measurementId: "G-BFH8R38JF4"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore, getDocs, doc, collection, setDoc, query }