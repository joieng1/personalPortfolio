"use strict;"
//John Ieng

//You will create array of objects named inventory
//each product is an object with item and price 
//{item: "itemname": price: 10}
const inventory = [
//add objects here
    {item: "milktea", price: 4.00},
    {item: "coffee", price: 3.00},
    {item: "boba", price: 0.25},
    {item: "lycee jelly", price: 0.25}
];

//declare any global variables
let cart = [];
let grandtotal = 0.00;
let tableHTML = "<table class=\"table table-bordered\"><tr><th>Item Name</th><th>Price</th></tr>";
let orderHTML = "<h2 class=\"mt-2 headerColor\">Cart: </h2>";

//display the inventory in a table on the webpage
for (let i = 0; i < inventory.length; i++)
{
    tableHTML += "<tr><td>" + inventory[i].item + "</td><td>$" + 
    inventory[i].price + "</td></tr>";
}
document.getElementById("menu").innerHTML = tableHTML+"</table>";

//function to run when add is clicked
function addItem(){
    let item = document.getElementById("itemName").value;
    let quantity = document.getElementById("amount").value;
    let itemprice = findPrice(item);
    let totalItemPrice = findPrice(item) * quantity;


    //If user input has a valid value and user input matches a real item, main program will run
    if(item == '' || quantity <= 0) 
    {
        alert("Contains invalid or null value");
    }
    else if(itemprice == -1)
    {
        alert("Item not found");
    }
    else {
        cart.push({item,quantity});
        grandtotal += totalItemPrice;

        //reset orderHTML
        orderHTML = "<h2 class=\"mt-2 headerColor\">Cart: </h2>";

        //Add item portion to orderHTML
        for (let i = 0; i < cart.length; i++)
        {
            orderHTML += "<p>" + cart[i].quantity + " " + 
            cart[i].item + " at $" + findPrice(cart[i].item).toFixed(2) + " each = $" + (findPrice(cart[i].item) * cart[i].quantity).toFixed(2)+ "</p>";
        }
        //Add total cost portion to orderHTML
        orderHTML += "<p>Total: $" + grandtotal.toFixed(2) + "</p>"

        //display orderHTML
        document.getElementById("display-result").innerHTML = orderHTML;
    }
}

//function to run when clear is clicked
function newOrder(){
    //reset orderHTML
    orderHTML = "<h2 class=\"mt-2 headerColor\">Cart: </h2>";
    document.getElementById("display-result").innerHTML = orderHTML;
    
    //reset cart array value
    cart = [];

    //reset grandtotal value
    grandtotal = 0;
}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    console.log("RAN");
    return -1;
}



