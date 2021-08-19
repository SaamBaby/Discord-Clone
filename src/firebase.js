import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA9HuFCGmtNvLHx2zBe6iJna2IeICJ2E70",
  authDomain: "discord-server-21.firebaseapp.com",
  projectId: "discord-server-21",
  storageBucket: "discord-server-21.appspot.com",
  messagingSenderId: "600376427003",
  appId: "1:600376427003:web:2d4b2e7cd08376faec0b5e",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
