const smallBar=document.querySelector('.sm-bar');
const pageContent=document.querySelector('.page-content');
const menuToggleIcon=document.querySelector('.menu-toggle-button');

menuToggleIcon.addEventListener('click',()=>{
    pageContent.classList.add('page-content-hide');
    smallBar.classList.remove('small-bar');
})
smallBar.addEventListener('click',()=>{
    pageContent.classList.remove('page-content-hide');
    smallBar.classList.add('small-bar');
})

