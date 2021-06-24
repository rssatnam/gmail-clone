import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAH8aVGSK-EbnpdcHAP9foMS5v4aUAm4ic",
  authDomain: "clone-3a0e4.firebaseapp.com",
  projectId: "clone-3a0e4",
  storageBucket: "clone-3a0e4.appspot.com",
  messagingSenderId: "327929460841",
  appId: "1:327929460841:web:0a0b39a5219b0069228af8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
