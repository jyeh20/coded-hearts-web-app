import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCbs4fLmv0kOj_p2WC-B8JSbieYNh7s9PM",
  authDomain: "eutectic-web-d44cd.firebaseapp.com",
  projectId: "eutectic-web-d44cd",
  storageBucket: "eutectic-web-d44cd.appspot.com",
  messagingSenderId: "89660841204",
  appId: "1:89660841204:web:e5306fa785e35ccdeed2a1",
  measurementId: "G-63YW1T6X3L",
});
// Initialize Firebase
firebase.analytics();

export default app;
