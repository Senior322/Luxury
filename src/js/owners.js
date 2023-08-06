const ownersList = document.querySelector('.owners__wrapper--list');

let touchStart = null;
let left = 30;


ownersList.addEventListener('touchstart', (e)=> touchStart = e.targetTouches[0].clientX);
ownersList.addEventListener('touchend', (e)=>{
   if(touchStart && touchStart - e.changedTouches[0].clientX > 150){
      left = left - 320;
      if(left < -1 * (e.currentTarget.scrollWidth - 320)){
         left = -1 * (e.currentTarget.scrollWidth - 320);
      };
      // console.dir(e.currentTarget.scrollWidth);
      ownersList.style.cssText = `left: ${left}px;`;
   }
   if(touchStart && touchStart - e.changedTouches[0].clientX < -150){
      left = left + 320;
      if(left > 0){
         left = 30;
      };
      ownersList.style.cssText = `left: ${left}px;`;

   }
   
});

