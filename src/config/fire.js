// Initialize Firebase
import firebase from "firebase"
var config = {
  // This is where the config will go
  apiKey: "AIzaSyAOIzBiuno6U22TU8CI5PQyCdpT5HadYFQ",
  authDomain: "testing-auth-ed468.firebaseapp.com",
  databaseURL: "https://testing-auth-ed468.firebaseio.com",
  projectId: "testing-auth-ed468",
  storageBucket: "testing-auth-ed468.appspot.com",
  messagingSenderId: "528133818312"
};
const firebaseServer = firebase.initializeApp(config);
export default firebaseServer;
