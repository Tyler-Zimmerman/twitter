import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCf2Cxj2MZLsYn2BkzBeppYYeTHTXE3fCU",
    authDomain: "twitter-clone-a0557.firebaseapp.com",
    projectId: "twitter-clone-a0557",
    storageBucket: "twitter-clone-a0557.appspot.com",
    messagingSenderId: "397080461961",
    appId: "1:397080461961:web:e42271f1aa570f84b3fc58",
    measurementId: "G-YS6TRSBCM8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;