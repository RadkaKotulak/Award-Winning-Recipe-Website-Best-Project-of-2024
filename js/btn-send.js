function validateEmail() { //Creating the funtion for validation 
    //Creating variables for storing the messages
    var errorMessage = "Must enter a valid email address";
    var successMessage = "Your email was sent";
    //Getting the values from contact form
    var input = document.getElementById('input-field').value;
    var text = document.getElementsByClassName('input-field');

    // Get the input field with the ID 'input-long'
    var longInput = document.getElementById('input-long');   

    // Checking if the input contains the '@' character with .includes
    if (input.includes('@')) {
        alert(successMessage);//Printing out the alert message
        
        // Clearing the value of each input field with the class 'input-field'
        for (var i = 0; i < text.length; i++) {
            text[i].value = ""; //Deleting the value from the input
        }
        
        // Clearing the value of the input field with the ID 'input-long'
        longInput.value = "";
    } else {
        alert(errorMessage); //Printing out the other message
    }
}
