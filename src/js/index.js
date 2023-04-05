const button = document.getElementById('check_menu')

const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

const menu = document.querySelector('.nav_items')

button.addEventListener('click', ()=>{

    if(button.checked){
        menu.classList.toggle('hidden')
        closeMenu.classList.toggle('hidden')
        openMenu.classList.toggle('hidden')
    }else{
        menu.classList.toggle('hidden')
        closeMenu.classList.toggle('hidden')
        openMenu.classList.toggle('hidden')
    }

})

