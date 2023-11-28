import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import firebase from "firebase/app";
import "firebase/firestore";
import FirebaseConfig from "./components/FirebaseConfig.jsx";
import "./index.css";

firebase.initializeApp(FirebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
