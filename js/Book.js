var validName = document.getElementById("name"),

    validPhone = document.getElementById("phone"),

    validType = document.getElementById("id2"),

    submitButton = document.getElementById("submit");


submitButton.onclick = ()=>{

    if (validName.value == ""){
        alert("Name is Empty!!");
    } 
    else if(validPhone.value.length < 11 || validPhone.value.length > 11){
        alert("Please Enter a valid Phone Number!!");
    }
    else if(validType.value == "none"){
        alert("Car type is Empty!!");
    }

}
