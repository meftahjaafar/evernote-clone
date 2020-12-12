import firebase from 'firebase/app';
import 'firebase/firestore';


  // web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBUbEVLQJ0jBMLEaG__d7e8PZ3WiStUzBw",
    authDomain: "evernote-clone-f2ebb.firebaseapp.com",
    projectId: "evernote-clone-f2ebb",
    storageBucket: "evernote-clone-f2ebb.appspot.com",
    messagingSenderId: "1016687523198",
    appId: "1:1016687523198:web:a37343a8b3f3550da0ef2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;