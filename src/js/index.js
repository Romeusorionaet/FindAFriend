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
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});

// let inicialLength = swiper.slidesEl.childElementCount

// buttonSliderNext.addEventListener('click', ()=>{
//     let atualLength = inicialLength - 1;

//     console.log(inicialLength)
//     console.log(atualLength)
//    // console.log(swiper.slidesEl.childElementCount)

// })

// buttonSliderPrev.addEventListener('click', ()=>{
//     console.log(swiper.slidesEl.childElementCount)

// })





