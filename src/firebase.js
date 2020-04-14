import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAQSfizEz9CjQCqAlV-fpkauFP7zF9_SLU",
  authDomain: "thing-61481.firebaseapp.com",
  databaseURL: "https://thing-61481.firebaseio.com",
  projectId: "thing-61481",
  storageBucket: "thing-61481.appspot.com",
  messagingSenderId: "951782166095",
  appId: "1:951782166095:web:e1ffc06fb16cbcbcd6243a",
  measurementId: "G-9E4798G9ER"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
//firebase.analytics();
export default firebase;