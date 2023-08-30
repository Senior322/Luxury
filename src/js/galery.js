const touch = document.querySelector('.galery__container');
const zoom = document.querySelector('.galery__zoom');
const Change = document.querySelector('.galery__zoom-img')


touch.addEventListener('click', (e)=>{
   zoom.classList.toggle('galery__zoom---none');
   if (e.target.nodeName === 'IMG') {
      Change.src = e.target.src;
   }
});

zoom.addEventListener('click', (e)=>{
   zoom.classList.toggle('galery__zoom---none');
});
