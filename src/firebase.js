import firebase from "firebase";


var firebaseApp = firebase.initializeApp({
  apiKey: process.env.React_App_Api_key,
  authDomain: process.env.React_App_authDomain,
  projectId: "react-contact-form-007",
  storageBucket: process.env.React_App_storageBucket,
  messagingSenderId: process.env.React_App_messagingSenderId,
  appId: process.env.React_App_appId
});

var db = firebaseApp.firestore();

export { db };
