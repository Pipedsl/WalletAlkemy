/* Validación de inicio de sesión */ 

function validacion() {

    const fakeEmail = "prueba@correo.cl"
    const fakePass = "123";

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if(email && pass){
        if(email === fakeEmail && pass === fakePass){

            alert("Acceso correcto");
            window.location.href = 'menu.html';

        }else{
            alert("credenciales invalidas");
        }
    }else{
        alert("Error - favor ingresa correo y pass");
    }


}