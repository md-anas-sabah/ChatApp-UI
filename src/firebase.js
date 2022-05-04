import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeycq6hLPKnDVaQL2LsfmBK36hcC_LAW4",
  authDomain: "whatsapp-clone-b90d5.firebaseapp.com",
  projectId: "whatsapp-clone-b90d5",
  storageBucket: "whatsapp-clone-b90d5.appspot.com",
  messagingSenderId: "555938301646",
  appId: "1:555938301646:web:e0230513f60441befe329f",
  measurementId: "G-MC9NQ7TRZ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
