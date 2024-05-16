function calculateIngredients() {
    // Get the value of the portions and convert it to an integer (1,2,3 portions)
    var portions = parseInt(document.getElementById("portions").value);
    // Select all elements with the class 'num' inside elements with the class 'ingredient-list'
    var ingredientList = document.querySelectorAll('.ingredient-list .num');


     // Creating a for Loop through each selected element
    for (var i = 0; i < ingredientList.length; i++) {

        // Get the value of the current element and convert it to a floating point number (0.1, 3.60)
        var value = parseFloat(ingredientList[i].getAttribute('value'));
        var totalAmount = value * portions; // Creating a simple calculation
        ingredientList[i].textContent = totalAmount; // Replace the content with the calculated amount
    }
}
//We had to set an atribute in html value , to use it for calculation as a portion for one. and then calculate more out of it
//When we first create a function without atribute value in html, our code was calculating with values and setting it as values to calculate
//Meaning portion for 1 = 15g ,portion for 2 was calulated 15*15= 225g , portion for 3 was 30*30=900g etc.