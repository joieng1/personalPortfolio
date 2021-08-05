"use strict";


function calc(){
    const weight = parseFloat(document.getElementById("weight").value);
    let total = 0;
    let cost = 0;
    
    
    if(weight <= 0){
        // If weight is less than or equal to 0, prints out error message
        alert("Error, weight is less than or equal to 0");
    }
    else {
        // Determines final cost based on size
        if(weight < 2.5){
            cost = 3.5;
            total = weight * cost;
        }
        else if(weight <= 5){
            cost = 2.85;
            total = weight * cost;
        }
        else {
            cost = 2.45;
            total = weight * cost;
        }
    }
    let html = "<p>Cost is $ " + cost.toFixed(2) + " per kg</p>";
    html += "<p>Total charge is $ " + total.toFixed(2) + "</p>";
    document.getElementById("receipt").innerHTML = html;
}