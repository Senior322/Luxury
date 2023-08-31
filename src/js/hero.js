const yellow = document.querySelectorAll('.hero__list-number');


yellow.forEach((item) => {
   item.addEventListener('click', (e)=>{
      yellow.forEach((Element) => {
         Element.classList.remove('hero__list-number--active')
      });
      item.classList.toggle('hero__list-number--active');
   })
})