let menuVisible = false;
const handleMenu = ()=> {
    

const menu = document.getElementById('menu-inside');

if(!menuVisible){
    
    menuVisible = !menuVisible
    // menu.style.opacity = 1;
    menu.style.right = '-50px';


}else{

    menuVisible = !menuVisible
    // menu.style.opacity = 0;
    menu.style.right = '-150px';
    

}
}

   
   
    


