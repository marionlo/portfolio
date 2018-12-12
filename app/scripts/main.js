// Typed script for the message on the first section
var typed = new Typed('#typed', {
  strings: ['Hi! I am Marion, a <span id="typed-front"><strong>Front-End Developer</strong></span> from France!'],
  typeSpeed: 30,
  backSpeed: 100,
  fadeOut: true,

});

// Scroll animation
$(function() {
  $.scrollify({
    section: ".scrollable-section",
  });
});




// MODAL SCRIPT
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("fa-times")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}