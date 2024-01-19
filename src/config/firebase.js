// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsv4duSQrc8ImDrJL6PB18LbWCS0po_M4",
  authDomain: "pm4-restaurante-app.firebaseapp.com",
  projectId: "pm4-restaurante-app",
  storageBucket: "pm4-restaurante-app.appspot.com",
  messagingSenderId: "1025736467856",
  appId: "1:1025736467856:web:d821ad062636be17e6ff15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//servicios

export const db = getFirestore(app); //recibe el firebase inicializado