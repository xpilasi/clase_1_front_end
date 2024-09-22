console.log('Ejercicio recuperar data form');
  
function recuperarDatosForm(event){
    event.preventDefault();
    let name =  document.querySelector('#name').value;
    let lastName =  document.getElementById('last-name').value;
    // let fullName = document.getElementById('nombre-completo').textContent = `${name} ${lastName}`

    let nombreCompleto = document.querySelector('#nombre-completo');

    nombreCompleto.innerHTML = `Nombre completo: ${name} ${lastName}`

    console.log(name);
    console.log(lastName);

}   


