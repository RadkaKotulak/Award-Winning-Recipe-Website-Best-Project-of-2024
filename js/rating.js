function Calculate(recipe) { //Setting recipe parameter because each recipe has indivudal rating example:Calculate('brocolli','gordon')
    //Setting variables for all stars and getting the elements from HTML using recipe again)
    //Using 
    var oneStar = document.getElementById('star-' + recipe + '-1').checked; 
    //Using .checked instead of value. Because we want to find out if each start was checked so it can read value TRUE, otherwise its unchecked= false
    var twoStar = document.getElementById('star-' + recipe + '-2').checked;
    var threeStar = document.getElementById('star-' + recipe + '-3').checked;
    var fourStar = document.getElementById('star-' + recipe + '-4').checked;
    var fiveStar = document.getElementById('star-' + recipe + '-5').checked;

    var totalStars = (oneStar * 1 + twoStar * 2 + threeStar * 3 + fourStar * 4 + fiveStar * 5); 
    //Setting a simple calculation
    document.getElementById('result-' + recipe).innerHTML = "Your rating: " + totalStars;
}
//Printing out the result for invidiual recipe

