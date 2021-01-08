var chats = [];
var nameHistory;
chats.push("test");
var name = window.prompt("Please Enter Your Name");

database = firebase.database();
var dataRef = database.ref("/");
var messageRef = database.ref("/message");
var contentRef = database.ref("/message/content");
var nameRef = database.ref("/message/name");
messageRef.on("value", snap => console.log(snap.val()));

var message;
console.log('hi');

function takeSubmition() {
  getName();
  message = document.getElementById("inputed").value
  messageRef.set({
    content: message
  })
  document.getElementById("inputed").value = "";
}

function getName () {
messageRef.set({
  name:name
})
}


contentRef.on("value", snap => chatHistory(snap.val()))



nameRef.on("value", snap => nameHistory = snap.val());

function chatHistory(temp) {
  if (temp != null && nameHistory!=undefined) {
  var x = document.createElement("li")
  var t = document.createTextNode(nameHistory+ ": " + temp);
  x.appendChild(t);
  document.getElementById("chatList").appendChild(x);

contentRef.on("value", snap => document.getElementById("text1").innerHTML = nameHistory + ": " + snap.val());

  }

  
}



