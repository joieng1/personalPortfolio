"use strict";

document.getElementById("startBtn").addEventListener("click", start);

function start() {
    //Responsible for displaying content on homepage after pressing button

    console.log("start");
    let html = '<div class="spacer1">';
    html += '<div class="row text-center">';
    html += '<div class="col">';
    html += '<div class="col text-center mt-5">';
    html += '<h1 class="startTitle">John Ieng</h1>';
    html += '<button class="btn btn-primary">';
    html += '<a href="about.html"class="text-decoration-none text-white">Learn More</a></button>';
    html += '</div></div></div></div>';
    setTimeout(function(){
        document.getElementById("header").innerHTML = "";
    }, 200);
    
    document.getElementById("welcomePage").innerHTML = html;
}