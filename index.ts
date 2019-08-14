// Import stylesheets
import './style.css';
import * as functions from 'firebase-functions';
import * as firebase from 'firebase';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript HOOOYYYY Starter</h1>`;

var firebaseConfig = {
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

db.collection("history").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
