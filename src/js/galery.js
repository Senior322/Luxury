const touch = document.querySelector('.img__1');
const touchTwo = document.querySelector('.img__2');
const touchThree = document.querySelector('.img__3');
const zoom = document.querySelector('.galery__zoom');
const Change = document.querySelector('.galery__zoom-img')


touch.addEventListener('click', (e)=>{
   touch.classList.toggle('galery__zoom')
   let newImage = './images/img__1.png'
   Change.src = newImage;
});

touchTwo.addEventListener('click', (e)=>{
   touchTwo.classList.toggle('galery__zoom')
   let newImage = './images/img__2.png'
   Change.src = newImage;
});

touchThree.addEventListener('click', (e)=>{
   touchThree.classList.toggle('galery__zoom')
   let newImage = './images/img__3.png'
   Change.src = newImage;
});
