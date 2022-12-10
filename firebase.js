import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlXD1WkvStp_sxnU4JHIVZqhF_8NPh15c",
  authDomain: "whatsapp-clone-ccb1d.firebaseapp.com",
  projectId: "whatsapp-clone-ccb1d",
  storageBucket: "whatsapp-clone-ccb1d.appspot.com",
  messagingSenderId: "1042081166172",
  appId: "1:1042081166172:web:d7a9c602b4a07babe74799",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
