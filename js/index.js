const burger = document.querySelector(".icon")
const menu = document.querySelector(".menu_body")
const body = document.querySelector("body")


burger.addEventListener('click', () => {
    
    if(burger.classList.contains('active')){
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
    }else{
        burger.classList.add('active')
        menu.classList.add('active')
        body.classList.add('lock')
    }
})

new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    allowTouchMove: true,
    autoHeight:true,
    autoplay: {
        delay: 3000,
    },
    pauseOnMouseEnter: true,
    speed: 1000, 
})