import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCeARs5QixL1X-M7C9Btr8NwxRThx19E6M",
  authDomain: "iot-project-feed2.firebaseapp.com",
  databaseURL: "https://iot-project-feed2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iot-project-feed2",
  storageBucket: "iot-project-feed2.appspot.com",
  messagingSenderId: "184949851695",
  appId: "1:184949851695:web:85f525680ea77577cee8da",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app); 
const auth = getAuth(app);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
