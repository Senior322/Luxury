const menuButton = document.querySelector('.button__menu');
const Burger = document.querySelector('.burger');

const consultations = document.querySelectorAll('.logo__button');
const consultationWindow = document.querySelector('.consultation__window');
const closedKnopka = document.querySelector('.consultation__window--knopka');

const liActive = document.querySelectorAll('.header__suppbox-language');
let language = 0;

menuButton.addEventListener('click', e => {
  Burger.classList.toggle('burger__open');
  document.body.classList.toggle('offScroll');
  menuButton.classList.toggle('button__menu--close');
});

consultations.forEach(consultation => {
  consultation.addEventListener('click', e => {
    consultationWindow.classList.toggle('consultation__window--open');
  });
});

closedKnopka.addEventListener('click', e => {
  consultationWindow.classList.toggle('consultation__window--open');
});

consultationWindow.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    consultationWindow.classList.toggle('consultation__window--open');
  }
});

function ToggleLanguage() {
   const li = document.querySelectorAll('.header__suppbox-language-li');
   for (let index = 0; index < li.length; index++) {
      li[index].classList.toggle('header__suppbox-language-li--active');
   } 
   
};
liActive.forEach((ul, index, array) => {
   ul.addEventListener('click', (e)=>{
      if (e.target.nodeName === 'LI') {
         ToggleLanguage();
      }
   })
})