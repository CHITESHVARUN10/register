const firebaseConfig = {
  apiKey: "AIzaSyA5hqhmwGAQlfQTC3dxje8_DQubN37dNEA",
  authDomain: "login133re.firebaseapp.com",
  databaseURL: "https://login133re-default-rtdb.firebaseio.com",
  projectId: "login133re",
  storageBucket: "login133re.appspot.com",
  messagingSenderId: "607352774989",
  appId: "1:607352774989:web:4a97ed0f130d0bb8895704",
};

firebase.initializeApp(firebaseConfig);

var contactFromDB = firebase.database().ref("registerForm");
document.getElementById("register").addEventListener("submit", SubmitForm);

function SubmitForm(e) {
  e.preventDefault();
  // take these value
  var username = getElementVal("username");
  var email = getElementVal("email");
  var tel = getElementVal("tel");
  var password = getElementVal("password");
  //to save fun in fire base
  saveMessages(username, email, tel, password);
  // alert for after submit

  //
  // to reset the form
  //document.getElementById("register").reset();
  document.getElementById("register").reset(); // resets the form
  alert("Registration successful!"); // displays an alert message
}
// functoion to save info and make new form in data base
const saveMessages = (username, email, tel, password) => {
  var newContactForm = contactFromDB.push();
  newContactForm.set({
    username: username,
    email: email,
    tel: tel,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
