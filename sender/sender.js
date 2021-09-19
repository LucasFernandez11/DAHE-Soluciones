//variables

let nombre = document.getElementById('nombre');
let telefono = document.getElementById('telefono');
let email = document.getElementById('email');
let mensaje = document.getElementById('mensaje');

//guardar el formulario

const form = document.getElementById('formu');

//evento

form.addEventListener('submit', (event) => {
    //deter la recarga de la pagina 
    event.preventDefault();

})

//declaro la funcion para enviar

function sender (nombre, telefono, email, mensaje,){
    email.send({
        SecureToken: '',//token de seguridad de smtp.js 
        To: 'correo de destino', //donde va a llegar el mensaje
        From: 'correo de origen',
        Subject: `${nombre} te envio un mensaje por la web`,
        Body: 

    })
}