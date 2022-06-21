burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')



burger.addEventListner('click', ()=>{
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')

})