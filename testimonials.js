import './fonts/stylesheet.css'
import './style.css'
import './responsive.css'
var modal = document.getElementById("myModal");

var orderBtn1 = document.getElementById("orderBtn1");

var span = document.getElementsByClassName("close")[0];
 
orderBtn1.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}