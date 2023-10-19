import './fonts/stylesheet.css'
import './style.css'
import './responsive.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

let dish = document.querySelectorAll('.dish-item');
let viewBtn = document.getElementById('view-all-btn');
let hideBtn = document.getElementById('hide-btn');
hideBtn.style.display = 'none';
for (let i = 0; i < dish.length; i++) {
    if(i > 2){
        dish[i].style.display = 'none';
        viewBtn.addEventListener('click', function(){
            dish[i].style.display = 'flex';
            viewBtn.style.display = 'none';
            hideBtn.style.display = 'block';
        })
        hideBtn.addEventListener('click', function(){
            dish[i].style.display = 'none';
            viewBtn.style.display = 'block';
            hideBtn.style.display = 'none';
        })
    }        
}

var modal = document.getElementById("myModal");

var orderBtn1 = document.getElementById("orderBtn1");
var orderBtn2= document.getElementById("orderBtn2");

var span = document.getElementsByClassName("close")[0];
 
orderBtn1.onclick = function() {
  modal.style.display = "block";
}
orderBtn2.onclick = function() {
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
let jq2 = jQuery.noConflict();
jq2(function( $ ) {
  let owl = $('.owl-carousel');
  owl.owlCarousel({
    // animateOut: 'animate__flipOutX',
    // animateIn: 'animate__flipInX',
    loop:true,
    // autoplay:true,
    // autoplayTimeout: 5000,
    smartSpeed: 600,
    margin:25,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
 
        }
    }
  })
  
// Go to the next item
$('.right-arrow').on( 'click', function() {
    owl.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.left-arrow').on('click',function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});

let arrow = document.querySelectorAll('.right-arrow svg');
for(let i = 0; i < arrow.length; i++){
  arrow[i].addEventListener("mouseenter", function(){
  this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="57" height="28" viewBox="0 0 57 28" fill="none">
                      <path d="M0 13.8919H55M55 13.8919L42.5 2M55 13.8919L42.5 26.5" stroke="#369C50" stroke-width="4" stroke-linejoin="round"/>
                    </svg>`;
});
arrow[i].addEventListener("mouseleave", function(){
  this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="39" height="28" viewBox="0 0 39 28" fill="none">
                      <path d="M-0.00012207 13.8919H36.9999M36.9999 13.8919L24.4999 2M36.9999 13.8919L24.4999 26.5" stroke="#E1E1E1" stroke-width="4" stroke-linejoin="round"/>
                    </svg>`;
});
}
  