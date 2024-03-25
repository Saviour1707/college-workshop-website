const firebaseConfig = {
    apiKey: "AIzaSyAVE5e8f6AE2YrDXAELDVqRENyDfeipKkw",
    authDomain: "contactform-12bb3.firebaseapp.com",
    databaseURL: "https://contactform-12bb3-default-rtdb.firebaseio.com",
    projectId: "contactform-12bb3",
    storageBucket: "contactform-12bb3.appspot.com",
    messagingSenderId: "361514230398",
    appId: "1:361514230398:web:b4c922403d698d82b4ee2f",
    measurementId: "G-D48B2REZ6Y"
  };
  firebase.initializeApp(firebaseConfig);
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {


    e.preventDefault();
    var name = getElementVal("name");
    // var roll = getElementVal("roll");
    var email = getElementVal("email");
    // var Dept = getElementVal("Dept");
    var mobile = getElementVal("mobile");
    var message = getElementVal("message");
  
    saveData(name, email, mobile, message);
    // console.log(name, mail, roll, Dept, mobile);
    //enable alert
    // document.querySelector(".alert").style.display = "block";
    //remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
    // reset the form
    document.getElementById("contactForm").reset();
  }
  const saveData = (name, email, mobile, message) => {

    var contactFormDB = firebase.database().ref("contactForm/"+ mobile);
    var newStudentForm = contactFormDB.push();
  
    contactFormDB.set({
      name: name,
      email: email,
      mobile: mobile,
      message: message,
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  