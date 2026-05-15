const firebaseConfig = {
  apiKey: "AIzaSyBW1_XPhCnTPzI9N9bq1WAIljaEGTghXKY",
  authDomain: "attendance-31fa7.firebaseapp.com",
  databaseURL: "https://attendance-31fa7-default-rtdb.firebaseio.com",
  projectId: "attendance-31fa7",
  storageBucket: "attendance-31fa7.firebasestorage.app",
  messagingSenderId: "446604408953",
  appId: "1:446604408953:web:923fc6546e8e834a08fca8",
  measurementId: "G-ZGSSS3W3TM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

console.log ('connected to firebase')

function  logout() {
  // body...
  firebase.auth().signOut().then(function (){
    window.location.href = "index.html"
  }).catch((error) =>{
    alert("Error while you try to logout")
  })
}