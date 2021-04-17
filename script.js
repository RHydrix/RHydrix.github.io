var file = "https://raw.githubusercontent.com/Waffl3Development/Waffl3Development.github.io/master/Status.json";

function fileRead(){
fetch(file)
.then(response => response.text())
.then(data => {
  var node = document.getElementById('curStatus');
  node.innerHTML = data;
});
}
