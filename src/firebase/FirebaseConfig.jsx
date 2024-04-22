import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtNpDdoMCWms9cR3RNrmR23MS8n2OfmqQ",
  authDomain: "myecommerceap.firebaseapp.com",
  projectId: "myecommerceap",
  storageBucket: "myecommerceap.appspot.com",
  messagingSenderId: "279790253969",
  appId: "1:279790253969:web:8c1ca7ba6ede3dcbcf8c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth} ;