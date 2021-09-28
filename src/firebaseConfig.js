import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZLuhFjHxeZCWcu9Ng8r7I3ZAbr_CsIZo",
  authDomain: "umniedzialateam.firebaseapp.com",
  projectId: "umniedzialateam",
  storageBucket: "umniedzialateam.appspot.com",
  messagingSenderId: "138773356927",
  appId: "1:138773356927:web:2cd15adf46b7230bde7a4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default firebaseConfig;
