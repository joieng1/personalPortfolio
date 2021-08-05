"use strict";


$(document).scroll(function () {
    let $nav = $("#mainNavbar");
    $nav.toggleClass(
        "scrolled",
        $(this).scrollTop() > $nav.height()
    );
});