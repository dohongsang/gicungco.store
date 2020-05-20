// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/analytics";

// Bizzi app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3sOL3-NFKl9ZtT-qDpm0d6_kG_u5FoqI",
  authDomain: "gicungco-store.firebaseapp.com",
  databaseURL: "https://gicungco-store.firebaseio.com",
  projectId: "gicungco-store",
  storageBucket: "gicungco-store.appspot.com",
  messagingSenderId: "1035380400085",
  appId: "1:1035380400085:web:2eb8d5ad9c894619efa75c",
  measurementId: "G-BL57K3L6QC",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
