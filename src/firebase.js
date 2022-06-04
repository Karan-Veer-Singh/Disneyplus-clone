import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBYMbhD25RRHlfxGF9uMQTD9y4pfn8L2mc",
  authDomain: "kvs-disneyplus-clone.firebaseapp.com",
  projectId: "kvs-disneyplus-clone",
  storageBucket: "kvs-disneyplus-clone.appspot.com",
  messagingSenderId: "716835352667",
  appId: "1:716835352667:web:19e03e5e0030f8227b8f7e",
  measurementId: "G-R1WSYCYPRG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
