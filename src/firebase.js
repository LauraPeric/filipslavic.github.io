import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-BK5qLW3S1OZ5oB6ZsAw8yEnPVfuvMh4",
    authDomain: "facialcareme.firebaseapp.com",
    projectId: "facialcareme",
    storageBucket: "facialcareme.appspot.com",
    messagingSenderId: "640088775308",
    appId: "1:640088775308:web:50c7898b38c49178e5f9a9"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export {
    firebase,
    db,
};
