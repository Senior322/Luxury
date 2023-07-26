const menuButton = document.querySelector('.button__menu');
const Burger = document.querySelector('.burger');

const consultations = document.querySelectorAll('.logo__button');
const consultationWindow = document.querySelector('.consultation__window');
const closedKnopka = document.querySelector('.consultation__window--knopka');



menuButton.addEventListener('click', (e)=>{
   Burger.classList.toggle('burger__open');
   document.body.classList.toggle('offScroll');
   menuButton.classList.toggle('button__menu--close')
});

consultations.forEach(consultation =>{
   consultation.addEventListener('click', (e)=>{
      consultationWindow.classList.toggle('consultation__window--open');
   })
})

closedKnopka.addEventListener('click', (e)=>{
   consultationWindow.classList.toggle('consultation__window--open');
});

consultationWindow.addEventListener('click', (e)=>{
   if (e.target === e.currentTarget) {
      consultationWindow.classList.toggle('consultation__window--open');
   }
})

