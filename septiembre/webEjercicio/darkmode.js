
let darkMode = true;
const darkModeSwitch = ()=>{
    console.log('TEST');
    
    if(darkMode){
        document.querySelector('body').style.backgroundColor = '#FFFFFF'
        document.querySelector('body').style.color = '#2C2C3B'
        
        darkMode = !darkMode;
    }else{
        document.querySelector('body').style.backgroundColor = '#2C2C3B'
        document.querySelector('body').style.color = '#FFFFFF'
        darkMode = !darkMode;
    }
    

    
}
