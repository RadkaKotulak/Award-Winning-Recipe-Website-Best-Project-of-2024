// Function to auto-slide the slider
function autoSlide() {
    // Getting the slider element
    var slider = document.querySelector('.slider');
    
    // Defining the interval time (in milliseconds) for each slide
    var intervalTime = 7000; // 7 seconds

    // Creating a variable to keep track of the current slide index
    var currentSlide = 0;

    //Creating the function to scroll the slider to the next slide
    function slideNext() {
        // Calculating the width of each slide
        var slideWidth = slider.offsetWidth;
        
        // Calculating the distance to scroll
        var scrollDistance = slideWidth;
        
        // Calculating the new scroll position
        var newPosition = slider.scrollLeft + scrollDistance;

        // Checking if we have reached or passed the last slide
        if (currentSlide >= 2) {
            // If we have reached or passed the last slide, scroll back to the first slide
            slider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            // Reseting the current slide index to 0
            currentSlide = 0;
        } else {
            // Otherwise, scrolling to the new position with smooth behavior
            slider.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            // Incrementing the current slide index
            currentSlide++;
        }
    }
    
    // Setting the interval to automatically slide to the next slide
    setInterval(slideNext, intervalTime);
}

// Calling the autoSlide function when the window is loaded
window.addEventListener('load', autoSlide);
