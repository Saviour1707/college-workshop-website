const firebaseConfig = {
    apiKey: "",
    authDomain: "studentform-d4059.firebaseapp.com",
    databaseURL: "https://studentform-d4059-default-rtdb.firebaseio.com",
    projectId: "studentform-d4059",
    storageBucket: "studentform-d4059.appspot.com",
    messagingSenderId: "828917284533",
    appId: "1:828917284533:web:befd5fecab28357e7d48fc",
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  
  document.getElementById("studentForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
  
  
    e.preventDefault();
    var name = getElementVal("name");
    var collegename = getElementVal("collegename");
    var email = getElementVal("email");
    var instituteid = getElementVal("instituteid");
    var mobile = getElementVal("mobile");
    var Dept = getElementVal("Dept");
  
    saveData(name, collegename, email, instituteid, mobile, Dept);
    document.getElementById("studentForm").reset();
  }
  // to save the details
  const saveData = (name, collegename, email, instituteid, mobile, Dept) => {
  
    var studentformDB = firebase.database().ref("studentForm/"+ instituteid);
    var newStudentForm = studentformDB.push();
  
    studentformDB.set({
      name: name,
      collegename: collegename,
      email: email,
      instituteid: instituteid,
      mobile: mobile,
      Dept: Dept,
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  document.getElementById('Clear-btn').addEventListener('click', function() {

    document.getElementById("studentForm").reset();
  });