const ownersList = document.querySelector('.owners__wrapper--list');
const buttons = document.querySelectorAll('.owners__pagination--button')


let touchStart = null;
let left = 30;
let currentImageIndex = 0;


ownersList.addEventListener('touchstart', (e)=> touchStart = e.targetTouches[0].clientX);
ownersList.addEventListener('touchend', (e)=>{
   if(touchStart && touchStart - e.changedTouches[0].clientX > 150){
      left = left - 320;
      if(left < -1 * (e.currentTarget.scrollWidth - 320)){
         left = -1 * (e.currentTarget.scrollWidth - 320);
      };
      ownersList.style.cssText = `left: ${left}px;`;
      currentImageIndex++;
   }
   if(touchStart && touchStart - e.changedTouches[0].clientX < -150){
      left = left + 320;
      if(left > 0){
         left = 30;
      };
      ownersList.style.cssText = `left: ${left}px;`;
      currentImageIndex--;
   }
   UpdateButtons();
});

function UpdateButtons(){
   buttons.forEach((button, index)=>{
      if(index === currentImageIndex){
         button.classList.add('owners__pagination--button-active');
      }
      else{
         button.classList.add('owners__pagination--button') = '#929292';
      }
   })
}