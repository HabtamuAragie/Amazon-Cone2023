import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFJl_K5O_-X30el5VKsLvS_IFUMgzg6mA",
  authDomain: "two-1b29b.firebaseapp.com",
  projectId: "two-1b29b",
  storageBucket: "two-1b29b.appspot.com",
  messagingSenderId: "27004238992",
  appId: "1:27004238992:web:ab51fb9c4b69acea40ec15"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
