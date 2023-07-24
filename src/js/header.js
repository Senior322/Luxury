const menuButton = document.querySelector('.button__menu');
const Burger = document.querySelector('.burger');

menuButton.addEventListener('click', (e)=>{
   Burger.classList.toggle('burger__open');
   document.body.classList.toggle('offScroll');
   menuButton.classList.toggle('button__menu--close')
});
