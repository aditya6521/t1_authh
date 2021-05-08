import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';



var firebaseConfig = {
  apiKey: "AIzaSyC1piTBZuGbU_G-WtmE5AmEVJ2wzCFqLGk",
  authDomain: "authh-588d3.firebaseapp.com",
  projectId: "authh-588d3",
  storageBucket: "authh-588d3.appspot.com",
  messagingSenderId: "1017714061045",
  appId: "1:1017714061045:web:6b11b644f996866d6a1fbc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { auth,firestore,analytics};