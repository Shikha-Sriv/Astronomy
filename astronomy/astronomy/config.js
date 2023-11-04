import  firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBmZH4OfGGH1ekMpz2PRNaID9Zrq9PTMqU",
  authDomain: "astronomy-20e98.firebaseapp.com",
  databaseURL: "https://astronomy-20e98-default-rtdb.firebaseio.com",
  projectId: "astronomy-20e98",
  storageBucket: "astronomy-20e98.appspot.com",
  messagingSenderId: "1008866751749",
  appId: "1:1008866751749:web:29b2762b22f822762b736c"
};


// Initialize Firebase

  firebase.initializeApp(firebaseConfig);


export default  firebase.database()