// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBdAKSBph8-ySjbxUe-5V-EPrNdRMkAHHU",
    authDomain: "clothing-e-comm-site.firebaseapp.com",
    projectId: "clothing-e-comm-site",
    storageBucket: "clothing-e-comm-site.appspot.com",
    messagingSenderId: "244947011765",
    appId: "1:244947011765:web:f36bb0562b1271bf9096fc",
    measurementId: "G-MQS1MGGLKD"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  

  export default db;


  