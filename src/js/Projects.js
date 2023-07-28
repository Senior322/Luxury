const Data = document.querySelector('.projects__menu-images');
const nextButtons = document.querySelectorAll('.projects__pagination-li');
const previousButton = document.querySelector('.test2');
const button3 = document.querySelector('.test0');

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

















// let currentPageIndex = 0;
// const itemsPerPage = 4;


// function showCurrentPage(){
//    const allItems = Data.querySelectorAll('.projects__menu-images-li');


//    allItems.forEach(item =>{
//       item.style.display = 'none';
//    });

//    const startIndex = currentPageIndex * itemsPerPage;
//    const endIndex = startIndex + itemsPerPage;

//    for(let i = startIndex; i < endIndex; i++) {
//       if(allItems[i]){
//          allItems[i].style.display = 'block';
//       };
//    };

//    updateButtonsState();
// };

// function nextPage(){
//    if(currentPageIndex < Math.ceil(Data.querySelectorAll('.projects__menu-images-li').length / itemsPerPage) - 1){
//       currentPageIndex++;
//       showCurrentPage();
//    }
// };

// function previousPage() {
//    if (currentPageIndex > 0) {
//        currentPageIndex--;
//        showCurrentPage();
//    }
// };

// function updateButtonsState(){
//    if (currentPageIndex === Math.ceil(Data.querySelectorAll('.projects__menu-images-li').length / itemsPerPage) - 1) {
//       nextButton.disabled = true;
//    } else {
//       nextButton.disabled = false;
//    }
//   if (currentPageIndex === 0) {
//       previousButton.disabled = true;
//    } else {
//       previousButton.disabled = false;
//    }
// }

// showCurrentPage();
// previousButton.disabled = true;
// updateButtonsState();




//    function main() {
//       let currentPage = 0;
//       let items = 3;

//    function displayList(arrData, itemPerPage, page){
//       const start = itemPerPage * page;
//       const end = start + itemPerPage;
//       const paginatedData = arrData.slice(start, end);

//       paginatedData.forEach((el) => {

//       });
//    };

//    function displayPagination(){};

//    function displayPaginationButton(){};
//    displayList(Data, items, currentPage);
// }
// main();

