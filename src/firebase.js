// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMix209xLwXhjiEVMWuV_Rl1seb6PLmZs",
    authDomain: "slack-clone-790b4.firebaseapp.com",
    projectId: "slack-clone-790b4",
    storageBucket: "slack-clone-790b4.appspot.com",
    messagingSenderId: "598327401447",
    appId: "1:598327401447:web:7e444949fa3a793ad87b42",
    measurementId: "G-8B466X7E6B"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }; 
  export default db;

 