const button = document.getElementById('check_menu')

const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')
const menu = document.querySelector('.nav_items')

const buttonSliderNext = document.querySelector('.swiper-button-next')
const buttonSliderPrev = document.querySelector('.swiper-button-prev')

startScreenWidthCalculation();
window.addEventListener('resize', startScreenWidthCalculation);

function startScreenWidthCalculation(){
    window.innerWidth >= 1200 ? 
    menu.classList.remove('hidden')
    : 
    menu.classList.add('hidden')
}

button.addEventListener('click', ()=>{
    if(button.checked){
        menu.classList.remove('hidden')
        closeMenu.classList.toggle('hidden')
        openMenu.classList.toggle('hidden')
    }else{
        menu.classList.add('hidden')
        closeMenu.classList.toggle('hidden')
        openMenu.classList.toggle('hidden')
    }
})

// swiper slider

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: -10,
    slidesPerView: window.innerWidth < 1200 ? 1.2 : 1,
    
    pagination: {
      el: '.swiper-pagination',
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperEquip = new Swiper('.swiperEquip', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: window.innerWidth < 1200 ? 10 : 40,
    slidesPerView: window.innerWidth < 1200 ? 1.2 : 4,
    
    pagination: {
      el: '.swiper-pagination',
    },
});





