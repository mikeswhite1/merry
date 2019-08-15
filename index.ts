// Import stylesheets
import './style.css';
import * as functions from 'firebase-functions';
import * as firebase from 'firebase';


export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript HOOOYYYY Starter</h1>`;

const firebaseConfig = {
    apiKey: "AIzaSyDtLLwAUjvHmXyTFczU1e9klJMWQFioY7s",
    authDomain: "merry-972e0.firebaseapp.com",
    databaseURL: "https://merry-972e0.firebaseio.com",
    projectId: "merry-972e0",
    storageBucket: "merry-972e0.appspot.com",
    messagingSenderId: "201192716744",
    appId: "1:201192716744:web:dab6c6d29aa821cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const history = db.collection("history");
history.doc("last").set({
  walker: "Chris",
  time: "11:11:00 AM"
});