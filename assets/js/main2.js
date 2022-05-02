// Initialize Firebase(2)
var config = {
  apiKey: "AIzaSyDfb2QT1AG3-2yqiiUo1mkOn170QRtK92A",
  authDomain: "ecell-1b04d.firebaseapp.com",
  projectId: "ecell-1b04d",
  storageBucket: "ecell-1b04d.appspot.com",
  messagingSenderId: "324153281020",
  appId: "1:324153281020:web:0d3d83bdb18d6e0f534a79",
  measurementId: "G-BW02JFHNT6",
  databaseURL: "https://ecell-1b04d-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

document
  .getElementById('registrationform2')
  .addEventListener('submit', formSubmit2);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#fname').value;
  let email = document.querySelector('#email1').value;
  let contact = document.querySelector('#contact1').value;
  let scholor = document.querySelector('#scholor').value;
  let branch = document.querySelector('#branch1').value;
  let year = document.querySelector('#year1').value;
  let vertical1 = document.querySelector('#vertical1').value;
  let vertical2 = document.querySelector('#vertical2').value;

  //send message values
  sendMessage(name, email, contact, scholor, branch, year, vertical1, vertical2);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

function formSubmit2(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name2 = document.querySelector('#fname2').value;
  let email2 = document.querySelector('#email12').value;
  let contact2 = document.querySelector('#contact12').value;
  let scholor2 = document.querySelector('#scholor2').value;
  let branch2 = document.querySelector('#branch12').value;
  let year2 = document.querySelector('#year12').value;
  let vertical12 = document.querySelector('#vertical12').value;
  let vertical22 = document.querySelector('#vertical22').value;

  //send message values
  sendMessage(name2, email2, contact2, scholor2, branch2, year2, vertical12, vertical22);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, contact, scholor, branch, year, vertical1, vertical2) {
  let newFormMessage = formMessage.push();

  // alert("submit")
  newFormMessage.set({
    name: name,
    email: email,
    contact: contact,
    scholor: scholor,
    branch: branch,
    year: year,
    vertical1: vertical1,
    vertical2: vertical2,

  });
  alert("your application submited");


  // data to be sent to the POST request
  let _data = {
    email: email,
    name: name,
    vertical: vertical1,
    vertical2: vertical2,
    contact: contact

  }

  fetch('20.24.196.91:8080', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.text())
    .then(json => { console.log(json); window.location.href = "index.html"; });




}