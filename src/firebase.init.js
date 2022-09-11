import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdcnAR0IDkDVGCNCV6fhktoZh-Vv288n0",
  authDomain: "social-bolg.firebaseapp.com",
  projectId: "social-bolg",
  storageBucket: "social-bolg.appspot.com",
  messagingSenderId: "953333334612",
  appId: "1:953333334612:web:76151a7d51684406a723c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;