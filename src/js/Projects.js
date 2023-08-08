const Data = document.querySelector('.projects__menu-images');
const nextButtons = document.querySelectorAll('.projects__pagination-li');


nextButtons.forEach((button ,index, arr)=>{
   button.addEventListener('click', ()=> {
      arr.forEach(button=>{button.classList.remove('projects__pagination-li--current')});
      button.classList.add('projects__pagination-li--current')
      showCurrentPage(index + 1)});
})


let currentPageIndex = 0;
const itemsPerPage = 4;

function showCurrentPage(page) {
   const allItems = Data.querySelectorAll('.projects__menu-images-li');

   allItems.forEach(item => {
      item.style.display = 'none';
   });

   const startIndex = (page - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;

   for (let i = startIndex; i < endIndex; i++) {
      if (allItems[i]) {
         allItems[i].style.display = 'block';
      }
   }
}

function nextPage() {
   if (currentPageIndex < Math.ceil(Data.querySelectorAll('.projects__menu-images-li').length / itemsPerPage) - 1) {
      currentPageIndex++;
      showCurrentPage();
   }
}

function previousPage() {
   if (currentPageIndex > 0) {
      currentPageIndex--;
      showCurrentPage();
   }
}
showCurrentPage(1);

