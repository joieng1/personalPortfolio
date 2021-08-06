"use strict";

document.getElementById("forecast").addEventListener("click", getData);

function getData() {
    let zipcode = document.getElementById("zipcode").value;
    console.log(zipcode)
    getWeather(zipcode)
}

function getWeather(zip) {
    //this function sets up AJAX call to get weather for the zip
    const apiKey = "1307007a7da1aeb5b59930a312a42cd3";

    let endpoint = "https://api.openweathermap.org/data/2.5/forecast"
    let url = endpoint + "?zip=" + zip + "&units=imperial&appid=" + apiKey;
    
    //set up request
    //create XMLHttp object
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseHandler);

    //required for json
    xhr.responseType = "json";

    //open connection
    xhr.open("GET",url);

    //send data
    xhr.send()

}

function responseHandler() {
    if (this.status === 200) {
        //data was received
        console.log(this.response);
        const data = this.response;

        // Add data to html variable
        let html = "<p>City: " + data.city.name + ", " + data.city.country + "</p>";
        html += "<p>Temperature: " + data.list[0].main.temp + "F</p>";
        html += "<p>Temperature: " + data.list[0].weather[0].description + "</p>";

        document.getElementById("weatherInfo").innerHTML = html;
    }
    else {
        //put error message
        alert("Data not recieved");
    }
}


