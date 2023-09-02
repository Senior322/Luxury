const Data = document.querySelector('.blog__page-galery-container-ul');


const previous = document.querySelector(
  '.blog__page-pagination-button-previous'
);
const next = document.querySelector('.blog__page-pagination-button-next');
const dataItems = Data.querySelectorAll('.blog__page-galery-container-ul-li');
const totalItems = dataItems.length;
const buttons = document.querySelector('.blog__page-pagination-ul');


let currentPageIndex = 1;
let itemsPerPage = 5;

const size = window.innerWidth;
if (size < 767) {
  itemsPerPage = 5;
} else if (size < 1919) {
  itemsPerPage = 6;
} else {
  itemsPerPage = 12;
}
showCurrentPage(1);
renderPagination();
addCurrentNumber(currentPageIndex);
window.addEventListener('resize', e => {
  
  const size = e.currentTarget.innerWidth;
  if (size < 767) {
    itemsPerPage = 5;
    showCurrentPage(currentPageIndex);
    renderPagination();
  } else if (size < 1919) {
    itemsPerPage = 6;
    showCurrentPage(currentPageIndex);
    renderPagination();
  } else {
    itemsPerPage = 12;
    showCurrentPage(currentPageIndex);
    renderPagination();
  }
});



function showCurrentPage(page) {
  const allItems = dataItems;

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
  if (currentPageIndex < Math.ceil(totalItems / itemsPerPage)) {
    currentPageIndex++;
    showCurrentPage(currentPageIndex);
    addCurrentNumber(currentPageIndex);
  }
  
}

function previousPage() {
  if (currentPageIndex > 1) {
    currentPageIndex--;
    showCurrentPage(currentPageIndex);
    addCurrentNumber(currentPageIndex);
  }
}

previous.addEventListener('click', previousPage);
next.addEventListener('click', nextPage);

function renderPagination() {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const page = [];
  for (let index = 0; index < totalPage; index++) {
    page.push(`<li class="blog__page-pagination-li">${index+1}</li>`);
  }
  buttons.innerHTML = page.join('');
  document.querySelectorAll('.blog__page-pagination-li').forEach((button, index, arr) => {
   button.addEventListener('click', () => {
     arr.forEach(button => {
       button.classList.remove('projects__pagination-li--current');
     });
     button.classList.add('projects__pagination-li--current');
     showCurrentPage(index + 1);
     currentPageIndex = index + 1;
   });
 });
}
document.querySelectorAll('.blog__page-pagination-li').forEach((button, index, arr) => {
   button.addEventListener('click', () => {
     arr.forEach(button => {
       button.classList.remove('projects__pagination-li--current');
     });
     button.classList.add('projects__pagination-li--current');
     showCurrentPage(index + 1);
     currentPageIndex = index + 1;
   });
 });

 function addCurrentNumber(current) {
   document.querySelectorAll('.blog__page-pagination-li').forEach((button, index, arr) => {
      button.classList.remove('projects__pagination-li--current');
      if (current - 1 === index) {
         button.classList.add('projects__pagination-li--current');
      }
    });
 }