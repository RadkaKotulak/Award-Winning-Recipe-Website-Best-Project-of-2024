function scrollToAbout() {
    // Get the position of the "About Us" section
    var aboutSection = document.getElementById('about'); //Getting the values from about
    var position = aboutSection.offsetTop; 

    // Scrolling to the position of the "About Us" section with some additional offset
    window.scrollTo({
        top: position- -50, // Adjusting the offset 
        behavior: 'smooth' //Smooth scrolling behavior
    });
}
