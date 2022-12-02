burger = document.querySelector('.burger')
navBar = document.querySelector('.navBar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
    navBar.classList.toggle('height-nav-resp')
    rightNav.classList.toggle('nav-visibility-resp')
    navList.classList.toggle('nav-visibility-resp')
})
