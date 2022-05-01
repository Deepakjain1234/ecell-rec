// Initialize Firebase(2)
var config = {
    apiKey: "AIzaSyDfb2QT1AG3-2yqiiUo1mkOn170QRtK92A",
    authDomain: "ecell-1b04d.firebaseapp.com",
    projectId: "ecell-1b04d",
    storageBucket: "ecell-1b04d.appspot.com",
    messagingSenderId: "324153281020",
    appId: "1:324153281020:web:0d3d83bdb18d6e0f534a79",
    measurementId: "G-BW02JFHNT6",
    databaseURL:"https://ecell-1b04d-default-rtdb.firebaseio.com/"
  };
  firebase.initializeApp(config);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('register');
  
  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
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
    sendMessage(name, email, contact, scholor, branch, year,vertical1,vertical2);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, contact, scholor, branch, year,vertical1,vertical2) {
    let newFormMessage = formMessage.push();
    // alert("submit")
    newFormMessage.set({
      name: name,
      email: email,
      contact: contact,
      scholor: scholor,
      branch: branch,
      year: year,
      vertical1:vertical1,
      vertical2:vertical2,
      
    });
    alert("your application submited");
    window.location.href = "index.html";
    
  }