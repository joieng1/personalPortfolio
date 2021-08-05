"use strict";

// Caluclates BMI
function calcBMI(){
    const feet = parseInt(document.getElementById("feet").value);
    const inches = parseInt(document.getElementById("inches").value);
    const weight = parseInt(document.getElementById("weight").value);

    let height = (feet * 12) + inches;
    const BMI = parseFloat((weight * 703) / (height)**2);
    let category = "";

    console.log(BMI)
    if (feet <= 0 || inches <= 0 || weight <= 0){
        alert("Error, one of your values is too small.");
        reset();
    }
    else {
        if(BMI < 18.5){
            category = "Underweight";
        }
        else if(BMI < 25){
            category = "Normal";
        }
        else if(BMI < 30){
            category = "Overweight";
        }
        else {
            category = "Obese";
        }
    }
    
    let html = "<p class=\"results\" id=\"BMI\">BMI: " + BMI.toFixed(2) + "</p>";
    html += "<p class=\"results\" id=\"category\">Category: " + category + "</p>"
    document.getElementById("results").innerHTML = html;

}

// Clear values
function reset(){
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("weight").value = "";
    
    document.getElementById("BMI").innerText = "None";
    document.getElementById("category").innerText = "None";

    console.log("Success");
}