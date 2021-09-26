import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDqG_bhGFUo0molPAEFqVspTFh8PZJTrNg",
  authDomain: "car-prc-model.firebaseapp.com",
  projectId: "car-prc-model",
  storageBucket: "car-prc-model.appspot.com",
  messagingSenderId: "437421528616",
  appId: "1:437421528616:web:342461117d1f2ae94c071d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
