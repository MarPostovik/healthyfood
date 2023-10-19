import './fonts/stylesheet.css'
import './style.css'
import './responsive.css'
let arrowDown = document.querySelectorAll('ion-icon');
console.log(arrowDown)
var acc = document.getElementsByClassName("accordion");   
var panel;
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";

            } else {
                panel.style.display = "block";
                
            }
        });
    }

    for (let i = 0; i < arrowDown.length; i++) {
        acc[i].addEventListener("click", function() {
            if (panel.style.display === "block") {
                arrowDown[i].setAttribute("name", "chevron-up");
            }else{
                arrowDown[i].setAttribute("name", "chevron-down");
            }
        });
    }

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
