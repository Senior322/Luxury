const strelka = document.querySelectorAll('.footer__nav--item');


strelka.forEach((value) => {
   value.addEventListener('click', (e)=>{
      value.classList.toggle('footer__nav--item--open')
   })
});

