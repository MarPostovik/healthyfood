import"./responsive-26827a68.js";let n=document.querySelectorAll("ion-icon");console.log(n);var o=document.getElementsByClassName("accordion"),t;for(let e=0;e<o.length;e++)o[e].addEventListener("click",function(){this.classList.toggle("active"),t=this.nextElementSibling,t.style.display==="block"?t.style.display="none":t.style.display="block"});for(let e=0;e<n.length;e++)o[e].addEventListener("click",function(){t.style.display==="block"?n[e].setAttribute("name","chevron-up"):n[e].setAttribute("name","chevron-down")});var l=document.getElementById("myModal"),i=document.getElementById("orderBtn1"),c=document.getElementsByClassName("close")[0];i.onclick=function(){l.style.display="block"};c.onclick=function(){l.style.display="none"};window.onclick=function(e){e.target==l&&(l.style.display="none")};
