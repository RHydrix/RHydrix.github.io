/*function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}*/

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "objBar" + " objCard" + " objAnimate-top" + " itemColour-white";
    } else {
        navbar.className = navbar.className.replace(" objCard objAnimate-top itemColour-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("nav");
    if (x.classList.contains("objShow")) {
        x.classList.remove("objShow");
    } else {
        x.classList.add("objShow");
    }
}