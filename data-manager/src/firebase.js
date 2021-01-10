import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCRdq1ggKkHKYdtFj5AokGkkaHHUQmKp9A",
    authDomain: "resident-data-manager.firebaseapp.com",
    projectId: "resident-data-manager",
    storageBucket: "resident-data-manager.appspot.com",
    messagingSenderId: "341475209403",
    appId: "1:341475209403:web:74d3cb0f337fb0dbdc799e",
    measurementId: "G-9E5JEP51BN"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export default app;