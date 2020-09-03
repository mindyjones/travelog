import * as firebase from "firebase/app";
import "firebase/storage"; // Firebase Storage SDK
import "firebase/firestore"; // Firebase Database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyYtTyFgq1CkRBFuHK5f0LBd-DMsVSVss",
  authDomain: "firegram-d29d0.firebaseapp.com",
  databaseURL: "https://firegram-d29d0.firebaseio.com",
  projectId: "firegram-d29d0",
  storageBucket: "firegram-d29d0.appspot.com",
  messagingSenderId: "419024371367",
  appId: "1:419024371367:web:6dc2f8460dce820d57a582",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
