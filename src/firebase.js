import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDRS9E9NuLjoOyxnmdO6Hudqo_nQmRCVFM",
    authDomain: "ikechat-afd09.firebaseapp.com",
    projectId: "ikechat-afd09",
    storageBucket: "ikechat-afd09.appspot.com",
    messagingSenderId: "377064868885",
    appId: "1:377064868885:web:abda31c7caf5a49a64121c",
    measurementId: "G-7LS1EYMTXW",
  })
  .auth();
