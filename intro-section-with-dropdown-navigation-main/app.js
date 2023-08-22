const smallDropDown = document.querySelector('.img-nav')
let dropDown = false

smallDropDown.addEventListener('click', ()=>{
    if(dropDown){
    smallDropDown.src = 'images/icon-menu.svg'    
    }else{
        smallDropDown.src ='images/icon-close-menu.svg'
    }
   dropDown = !dropDown
})