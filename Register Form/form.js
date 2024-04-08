const firebaseConfig = {
  apiKey: "",
  authDomain: "studentform-d4059.firebaseapp.com",
  databaseURL: "https://studentform-d4059-default-rtdb.firebaseio.com",
  projectId: "studentform-d4059",
  storageBucket: "studentform-d4059.appspot.com",
  messagingSenderId: "828917284533",
  appId: "1:828917284533:web:befd5fecab28357e7d48fc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to submit the form data and redirect after successful submission
function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var collegename = getElementVal("collegename");
  var email = getElementVal("email");
  var instituteid = getElementVal("instituteid");
  var mobile = getElementVal("mobile");
  var Dept = getElementVal("Dept");

  saveData(name, collegename, email, instituteid, mobile, Dept)
      .then(() => {
          // Redirect after successful data submission
          document.getElementById("studentForm").reset();
          window.location.href = "/Payment/index.html";
      })
      .catch(error => {
          console.error("Error saving data to Firebase:", error);
          // Handle the error as needed
      });
}

// Function to save the form data to Firebase
// const saveData = (name, collegename, email, instituteid, mobile, Dept) => {
//   return new Promise((resolve, reject) => {
//       var studentformDB = firebase.database().ref("studentForm/" + instituteid);
//       var newStudentForm = studentformDB.push();
    
//       newStudentForm.set({
//           name: name,
//           collegename: collegename,
//           email: email,
//           instituteid: instituteid,
//           mobile: mobile,
//           Dept: Dept,
//       }, error => {
//           if (error) {
//               reject(error);
//           } else {
//               resolve();
//           }
//       });
//   });
// };
// Function to save the form data to Firebase
const saveData = (name, collegename, email, instituteid, mobile, Dept) => {
  return new Promise((resolve, reject) => {
      var studentformDB = firebase.database().ref("studentForm").child(instituteid);
      var newStudentForm = studentformDB.push();
    
      newStudentForm.set({
          name: name,
          collegename: collegename,
          email: email,
          instituteid: instituteid,
          mobile: mobile,
          Dept: Dept,
      }, error => {
          if (error) {
              reject(error);
          } else {
              resolve();
          }
      });
  });
};

// Function to get element value by ID
const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// Event listener for form submission
document.getElementById("studentForm").addEventListener("submit", submitForm);

// Event listener for clear button
document.getElementById('Clear-btn').addEventListener('click', function() {
  document.getElementById("studentForm").reset();
});
