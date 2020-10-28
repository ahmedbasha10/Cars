var book_Button = document.querySelectorAll(".bookbtn");
book_Button[0].onclick=function()
{
    window.location="Book2.html";
}
book_Button[1].onclick=function()
{
    window.location="Book2.html";
}
book_Button[2].onclick=function()
{
    window.location="Book2.html";
}
book_Button[3].onclick=function()
{
    window.location="Book2.html";
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