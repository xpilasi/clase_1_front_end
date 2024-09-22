const comprobarDni = (event) => {
    
    event.preventDefault()
    let dni =  document.querySelector('#dni').value;
    let valido = true; 
    let respuestaDni = document.querySelector('#respuesta-dni'); //OK
    const dniPrimer = dni[0].toLowerCase();
    let dniUltima = 0;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  
   if(dni.length == 9) {

    if(dniPrimer == 'y' || dniPrimer == 'x' || dniPrimer == 'z'){
        let numeroDni = dni.slice(1,8)
        dniUltima = dni[8].toLowerCase();

        switch(dniPrimer){
            case 'y': numeroDni =  '1' + numeroDni;break; 
            case 'x': numeroDni =  '0' + numeroDni;break; 
            case 'z': numeroDni =  '2' + numeroDni;break; 
        }    
        
        let moduloDni = numeroDni % 23;
        
        letras[moduloDni].toLocaleLowerCase() == dniUltima ? valido = true : valido = false

        }else{
            valido = false;
        }
   }else{valido = false;}

   
   valido ?  respuestaDni.innerHTML = ` DNI es VALIDO` : respuestaDni.innerHTML = ` DNI es INVALIDO `;


}
