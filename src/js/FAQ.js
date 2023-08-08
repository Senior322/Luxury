const strelka = document.querySelectorAll('.faq__list-li');


strelka.forEach((value) => {
   value.addEventListener('click', (e)=>{
      console.log(e)
      value.classList.toggle('faq__list-li--open')
   })
});

