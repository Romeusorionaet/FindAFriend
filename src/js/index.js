const button = document.getElementById('check_menu')

const menu = document.querySelector('.ul_items')
//const span = document.querySelectorAll('span')
fteste()
function fteste(){
    menu.style.display = 'none'
}

button.addEventListener('click', ()=>{

    if(button.checked){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }

})

