
// start of Advances //

var openOverLay = document.getElementById("advice-btn"),

    closeOverLay = document.getElementById("close-btn"),

    myOverLay = document.getElementById("advices");

openOverLay.addEventListener('click', () => {
    myOverLay.classList.add("open-lay");
});

closeOverLay.addEventListener('click', function(){
    myOverLay.classList.remove('open-lay');
});

// End of Advances //

// price validation //

var validatePrice = document.getElementById("price"),

    validateBrand = document.getElementById("brand"),

    submitButton = document.getElementById("submit");

submitButton.onclick = function(){
    if (validatePrice.value == ""){
        alert ("please refresh the page and fill price place");
    }else if (validatePrice.value <= 0){
        alert ("please Enter positive price");
    }
    else if(validateBrand.value == "none"){
        alert("please fill brand field!!");
    }
}

// End of Price validation //

// start of icons and images location to go //

var bmwPage = document.getElementById("Bmw-btn"),

    mercedesPage = document.getElementById("Mer-btn"),
    
    foardPage = document.getElementById("Foard-btn"),

    faceBookPage = document.getElementById("FaceIcon"),

    twitterPage = document.getElementById("twitterIcon");

bmwPage.onclick = function(){
    window.location = "BMW2.html";
}    

mercedesPage.onclick = function(){
    window.location = "Mercedes2.html";
}   

foardPage.onclick = function(){
    window.location = "foard2.html";
}   


var instaPage = document.getElementById("instaIcon"),

    facePage = document.getElementById("faceIcon"),

    twitterPage = document.getElementById ("twitterIcon");

instaPage.onclick = function(){
    window.location = "https://www.instagram.com";
}

facePage.onclick = function(){
    window.location = "https://www.facebook.com";
}

twitterPage.onclick = function(){
    window.location = "https://www.twitter.com";
}

// End of icons and images to go //

// Book button //

var bookButton = document.getElementById("Book-btn");

bookButton.onclick = function(){
    window.location = "Book2.html";
}