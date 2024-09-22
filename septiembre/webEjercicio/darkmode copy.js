
let darkMode = true;
const darkModeSwitch = ()=>{
    console.log('TEST');
    
    if(darkMode){
        document.querySelector('body').style.backgroundColor = '#FFFFFF'
        darkMode = !darkMode;
    }else{
        document.querySelector('body').style.backgroundColor = '#2C2C3B'
        darkMode = !darkMode;
    }
    

    
}
