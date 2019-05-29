var config = {
    apiKey: "AIzaSyCSYKH95suR4IR6zX-4qeOZgiAGVq9Jo04",
    authDomain: "save-emails-mw.firebaseapp.com",
    databaseURL: "https://save-emails-mw.firebaseio.com",
    projectId: "save-emails-mw",
    storageBucket: "save-emails-mw.appspot.com",
    messagingSenderId: "603362377419",
    appId: "1:603362377419:web:bcaafd2ccbbefdbc"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const mailsRef = firebase.database().ref('emails');