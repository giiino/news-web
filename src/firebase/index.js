import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
const firebaseConfig ={
  apiKey: "####",
  authDomain: "####",
  projectId: "####",
  storageBucket: "####",
  messagingSenderId: "####",
  appId: "####",
  measurementId: "####"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
export {
  auth,
  db,
};
