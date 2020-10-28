
var validEmail = document.getElementById("email"),

    validPassword = document.getElementById("psw"),

    validRepeatedPassword = document.getElementById("psw-repeat"),

    validPhone = document.getElementById("phonenumber"),

    validBirthDay = document.getElementById("appt");

    registerBtn = document.getElementById("register");


registerBtn.onclick = function(){
    
    if (validEmail.value == ""){
        alert("Email is Empty!!");
    } 
    else if(validEmail.value.indexOf("@") == -1 || validEmail.value.indexOf(".") == -1){
        alert("Please Enter Valid Email e.g: info@gmail.com");
    }
    else if(validPassword.value == "" || validPassword.value.length <= 8){
        alert("please Enter password that is bigger than 8 letters!!");
    }
    else if(validRepeatedPassword.value != validPassword.value){
        alert("Password is not equal!!");
    }
    else if(validPhone.value.length < 11 || validPhone.value.length > 11){
        alert("Please Enter a valid Phone Number!!");
    }
    else if(validBirthDay.value == ""){
        alert("please Enter your Birthday!!");
    }
}    

