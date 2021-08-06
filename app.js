"use strict";

document.getElementById("startBtn").addEventListener("click", start);

// $(document).scroll(function () {
//     let $nav = $("#mainNavbar");
//     $nav.toggleClass(
//         "scrolled",
//         $(this).scrollTop() > $nav.height()
//     );
// });

// function scroll() {

// }

function start() {
    console.log("start");
    let html = '<div class="spacer1">';
    html += '<div class="row text-center">';
    html += '<div class="col">';
    html += '<div class="col text-center mt-5">';
    html += '<h1>Welcome</h1>';
    html += '</div></div></div></div>';
    setTimeout(function(){
        document.getElementById("header").innerHTML = "";
    }, 200);
    
    document.getElementById("welcomePage").innerHTML = html;
}