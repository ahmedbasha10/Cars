// start of admin Name and password //
var adminName = "admin",

    adminPassword = "admin";

 // End of admin Name and password //   

var userInput = document.getElementById("username");

var userPassword = document.getElementById("password");

var login = document.getElementById("sub");

login.onclick = function(){
    if((userInput.value == "") || (userPassword.value == "")){
        alert("please fill username and password!!");
    }
    else if((userInput.value == adminName) && (userPassword.value == adminPassword)){
        window.location = "admin.html";
    }
    else{
        window.location = "../html2/index2.html";
    }
}