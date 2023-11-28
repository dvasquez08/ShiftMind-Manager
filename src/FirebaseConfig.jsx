import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FirebaseConfig = {
  apiKey: "AIzaSyCKdOO_XaadwZaI3xK27duOxuieg0yfBVc",
  authDomain: "checkinq-8aed0.firebaseapp.com",
  projectId: "checkinq-8aed0",
  storageBucket: "checkinq-8aed0.appspot.com",
  messagingSenderId: "688609712004",
  appId: "1:688609712004:web:14119b2c20561b5c45afd1",
};

const app = initializeApp(FirebaseConfig);
export const db = getFirestore(app);
