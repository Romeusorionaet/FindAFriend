const button = document.getElementById('check_menu')

const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')
const menu = document.querySelector('.nav_items')

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

