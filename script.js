/*function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}*/

// Change style of navbar on scroll
window.addEventListener('scroll', myFunction);

function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.classList.add("objCard", "objAnimate-top", "itemColour-white");
  } else {
      navbar.classList.remove("objCard", "objAnimate-top", "itemColour-white");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navGate");
    var isShown = x.classList.toggle("objshow");
    var btn = document.getElementById("menuBtn");
    if (btn)
    {      
     btn.setAttribute('aria-expanded', String(isShown));
     x.setAttribute('aria-hidden', String(!isShown));
    }
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  if (btn) btn.addEventListener('click', toggleFunction);
});