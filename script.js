/*function darkon(){
  var switchObjOn = document.getElementById('on');
  var switchObjOff = document.getElementById('off');
  var element = document.body;
  var sidebar = document.getElementById('sidebar');
  var contact = document.getElementsByClassName('contact');
  var generic = document.getElementsByClassName('gen-objBar-border');
  switchObjOn.style.display = 'none';
  switchObjOff.style.display = 'inherit';
  //element.classList.toggle("itemColor-darkMode");
  element.classList.toggle("itemColor-darkMode");
  sidebar.classList.toggle("sidebar-darkMode");
  for(i=0; i<contact.length; i++) {
    contact[i].classList.toggle("contact-darkMode")
  }
  for(j=0; j<generic.length; j++) {
    generic[j].classList.toggle("progBar-darkMode")
  }
}

function lighton(){
  var switchObjOn = document.getElementById('on')
  var switchObjOff = document.getElementById('off')
  var element = document.body;
  var sidebar = document.getElementById('sidebar');
  var contact = document.getElementsByClassName('contact');
  var generic = document.getElementsByClassName('gen-objBar-border');
  switchObjOn.style.display = 'inherit';
  switchObjOff.style.display = 'none';
  element.classList.toggle("itemColor-darkMode");
  sidebar.classList.toggle("sidebar-darkMode");
  for(i=0; i<contact.length; i++) {
    contact[i].classList.toggle("contact-darkMode")
  }
  for(j=0; j<generic.length; j++) {
    generic[j].classList.toggle("progBar-darkMode")
  }
}

function listLoop(array) {
  for(i=0; i<array.length; i++) {
    array[i].classList.toggle("contact-darkMode")
  }
}
*/
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

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
    if (x.className.indexOf("objShow") == -1) {
        x.className += " objShow";
    } else {
        x.className = x.className.replace(" objShow", "");
    }
}