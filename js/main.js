'use strict';

const navMenu = document.querySelectorAll('.nav_menu_item');

const navbar = document.querySelector('.nav_menu');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {

  if(window.scrollY > navbarHeight){
    navbar.style.backgroundColor = '#2ba9f7';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
  });


  
//Handle scrolling when tapping on the navbar menu
navMenu.forEach(menu => {
    menu.addEventListener('click', (event) => {
    
        const target = event.target;
        const link= target.dataset.link;
        if(link == null){
          return;
        } 
        scrollIntoView(link);
      });
});
 
function scrollIntoView(selector)
{
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'})
};