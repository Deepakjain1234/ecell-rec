// Import the functions you need from the SDKs you need
console.log("work");
alert("qwe")

 
// Paste the code from Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDfb2QT1AG3-2yqiiUo1mkOn170QRtK92A",
    authDomain: "ecell-1b04d.firebaseapp.com",
    projectId: "ecell-1b04d",
    storageBucket: "ecell-1b04d.appspot.com",
    messagingSenderId: "324153281020",
    appId: "1:324153281020:web:0d3d83bdb18d6e0f534a79",
    measurementId: "G-BW02JFHNT6",
    databaseURL:"https://ecell-1b04d-default-rtdb.firebaseio.com/"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
// Get a reference to the database service
const db = getDatabase(app);
 
document.getElementById('frmContact').addEventListener('submit', function(e) {
    e.preventDefault();
    set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
        name: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    });
 
    alert('Your form is submitted');
    document.getElementById('frmContact').reset();
});