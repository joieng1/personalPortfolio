"use strict";

document.getElementById("startBtn").addEventListener("click", start);

function start() {
    //Responsible for displaying content on homepage after pressing button
    
    console.log("start");
    let html = '<div class="spacer1">';
    html += '<div class="row text-center">';
    html += '<div class="col">';
    html += '<div class="col text-center mt-5">';
    html += '<h1>Welcome to my homepage.</h1>';
    html += '</div></div></div></div>';
    setTimeout(function(){
        document.getElementById("header").innerHTML = "";
    }, 200);
    
    document.getElementById("welcomePage").innerHTML = html;
}