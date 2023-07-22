const menuButton = document.querySelector('.buttonMenu');
const Burger = document.querySelector('.burger');

menuButton.addEventListener('click', (e)=>{
   Burger.classList.toggle('burger__open')
   document.body.classList.toggle('offScroll')
});