import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPS0XIiXxb6xRrnvM1Ms2nu5QLmPZqXn4",
  authDomain: "copy-cf611.firebaseapp.com",
  projectId: "copy-cf611",
  storageBucket: "copy-cf611.appspot.com",
  messagingSenderId: "392072576494",
  appId: "1:392072576494:web:beed3c501286da4d6da2ff",
  measurementId: "G-X5GHS7R4PG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};