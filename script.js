var file = "https://raw.githubusercontent.com/Waffl3Development/Waffl3Development.github.io/master/Status.json";

function fileRead(){
fetch(file)
.then(response => response.text())
.then(data => {
  var node = document.getElementById('curStatus');
  node.innerHTML = data;
  });
}

function darkon(){
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
