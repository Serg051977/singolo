const addActive = document.querySelector('.navigation');
 
addActive.addEventListener('click', (event) => {
addActive.querySelectorAll('.nav').forEach(el => el.classList.remove('active')); 
event.target.classList.add('active'); 
}) 

document.addEventListener('scroll', onScroll);

function onScroll(event){
 const curPos = window.scrollY;
 const sections = document.querySelectorAll('section');
 const links = document.querySelectorAll('.navigation a');

sections.forEach((e) => {
  if (e.offsetTop <= curPos && (e.offsetTop + e.offsetHeight) > curPos){
    links.forEach((a) => {
      a.classList.remove('active');
      if (e.getAttribute('id') === a.getAttribute('href').substring(1)){
      a.classList.add('active')
      }
    })
  }
})
}


const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
   sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
  


 const addActiv = document.querySelector('.button .button__list ');
 
addActiv.addEventListener('click', (event) => {
addActiv.querySelectorAll('.batton_link_a').forEach(a => a.classList.remove('active')); 
event.target.classList.add('active'); 
}) 



addActiv.addEventListener('click', (event) => {
       $(document).ready(function(){
        $('.portfolio__list .portfolio_list_element:first').appendTo('.portfolio__list');
      })  
         
      });


$(document).ready(function(){
  $('.hamburger').click(function(event){
    $('.hamburger,.header__navigation').toggleClass('active');

  });
});      
      
$(document).ready(function(){
  $('.nav').click(function(event){
    $('.hamburger,.header__navigation').toggleClass('active');

  });
});      



