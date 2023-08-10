const ownersList = document.querySelector('.owners__wrapper--list');
const buttons = document.querySelector('.owners__pagination')


let touchStart = null;
let left = 30;
let gap = 30;
let control = 0;
let current = 0;


const liWidth = ownersList.firstElementChild.scrollWidth;
const gapArr = [30,30,51]
const leftArr = [30, 41, 405]



function check(){
   if(document.body.scrollWidth < 768){
      gap = gapArr[0];
      left = leftArr[0];
      control = 0;
   }
   if(document.body.scrollWidth >= 768 && document.body.scrollWidth < 1920){
      gap = gapArr[1];
      left = leftArr[1];
      control = 1;
   }
   if(document.body.scrollWidth >= 1920){
      gap = gapArr[2];
      left = leftArr[2];
      control = 2;
   }
}
check();



ownersList.addEventListener('touchstart', (e)=> touchStart = e.targetTouches[0].clientX);
ownersList.addEventListener('touchend', (e)=>{
   if(touchStart && touchStart - e.changedTouches[0].clientX > 150){
      left = left - liWidth - gap;
      if(left < -1 * (ownersList.scrollWidth - document.body.scrollWidth + leftArr[control])){
         left = -1 * (ownersList.scrollWidth - document.body.scrollWidth + leftArr[control])
      };
      
      ownersList.style.cssText = `left: ${left}px;`;
      current = current === ownersList.children.length - 2 ? ownersList.children.length - 2 : current + 1;
      addStyle();
   }
   if(touchStart && touchStart - e.changedTouches[0].clientX < -150){
      left = left + liWidth + gap;
      if(left > 0){
         check();
      };
      ownersList.style.cssText = `left: ${left}px;`;
      current = current === 0 ? 0 : current - 1; 
      addStyle();
   }
});

function addStyle(){
   for (let index = 0; index < ownersList.children.length; index++) {
      if(index != current && index != current + 1){
         ownersList.children[index].classList.add('owners__wrapper--up')
      }
      else{
         ownersList.children[index].classList.remove('owners__wrapper--up')
      }
      
   }
}
addStyle();


buttons.addEventListener('click', (e)=>{
   // console.dir(e.target)
   // console.log(e.target.id)
   if(e.target.id == 1){
      check();
      ownersList.style.cssText = `left: ${left}px;`;
      current = 0;
      addStyle();
   }
   if(e.target.id == 3){
      current = ownersList.children.length - 2;
      left = -1 * (ownersList.scrollWidth - document.body.scrollWidth + leftArr[control])
      ownersList.style.cssText = `left: ${left}px;`;
      addStyle();
   }
   
})

