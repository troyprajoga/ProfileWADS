document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = 0;
    
    fadeIn(navbar);
});

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.01;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 10);
}
