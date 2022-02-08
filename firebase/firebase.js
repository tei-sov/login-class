// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app/combat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Place key here",
  authDomain: "voter-17439.firebaseapp.com",
  projectId: "voter-17439",
  storageBucket: "voter-17439.appspot.com",
  messagingSenderId: "15244790367",
  appId: "1:15244790367:web:7c42578817dd26b0df69ea",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized,use that one
}
// firebase.initializeApp(firebaseConfig)

export default firebase;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
