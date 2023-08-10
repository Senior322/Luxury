const strelka = document.querySelectorAll('.footer__nav--item');


strelka.forEach((value) => {
   value.addEventListener('click', (e)=>{
      console.log(e)
      value.classList.toggle('footer__nav--item--open')
   })
});

