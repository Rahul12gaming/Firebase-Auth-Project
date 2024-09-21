
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-cQ6VCXDu_UCFKCF4Dzk7dej3hiGoTlE",
  authDomain: "auth-3cb27.firebaseapp.com",
  projectId: "auth-3cb27",
  storageBucket: "auth-3cb27.appspot.com",
  messagingSenderId: "835930740669",
  appId: "1:835930740669:web:7a6bb9175758754be064d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);