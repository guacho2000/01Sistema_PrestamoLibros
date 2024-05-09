

//Expresiones regulares para usuario
const patron = {
    usuario: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
    contrasenia: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"#$%&/()=?¡¿*\-+,.:;_{}\[\]])[A-Za-z\d!\"#$%&/()=?¡¿*\-+,.:;_{}\[\]]{4,16}$/
}

//Validar campo correo----------------------------------------------------------
var inputUsuario = document.getElementById("user");
var mensajeError = null;

inputUsuario.addEventListener("blur", function(event){
    var usuario = event.target.value;
    var campo = event.target;

    // Eliminar mensaje de error anterior si existe
    if (mensajeError) {
        mensajeError.remove();
        mensajeError = null;
    }

    // Validar campo vacío
    if (usuario.length == 0) {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-vacio">Error. El campo no debe quedar vacio.</p>');
        mensajeError = campo.parentElement.querySelector('.campo-vacio');
    }

    // Validar formato de correo
    else if (!patron.usuario.test(usuario)) {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-patron">Error. Formato invalido.</p>');
        mensajeError = campo.parentElement.querySelector('.campo-patron');
    }else{
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-patron-valido">Formato Valido.</p>');
            mensajeError = campo.parentElement.querySelector('.campo-patron-valido');
    }
});

// Validar campo contraseña-----------------------------------------------------------------
var inputContrasenia = document.getElementById("contrasenia");
var mensajeErrorContrasenia = null;

inputContrasenia.addEventListener("blur", function(event){
    var contrasenia = event.target.value;
    var campo = event.target;

    // Eliminar mensaje de error anterior si existe
    if (mensajeErrorContrasenia) {
        mensajeErrorContrasenia.remove();
        mensajeErrorContrasenia = null;
    }

    // Validar campo vacío
    if (contrasenia.length == 0) {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-vacio">Error. El campo no debe quedar vacio</p>');
        mensajeErrorContrasenia = campo.parentElement.querySelector('.campo-vacio');
    }

    // Validar formato de contraseña
    else if (!patron.contrasenia.test(contrasenia)) {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-contrasenia">Error. Formato invalido</p>');
        mensajeErrorContrasenia = campo.parentElement.querySelector('.campo-contrasenia');

    } else {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-patron-valido">Formato Valido</p>');
        mensajeErrorContrasenia = campo.parentElement.querySelector('.campo-patron-valido');
    }
});


// Validar Credenciales----------------------------------------------------

const form = document.getElementById("formulario");
var campoVacio = null;
var errorCredenciales = null;

function ingresar(event){
    event.preventDefault();
    var user = document.getElementById("user").value;
    var pass = document.getElementById("contrasenia").value;
    var campo = event.target;

    // Eliminar mensaje de error anterior si existe
    if (campoVacio) {
        campoVacio.remove();
        campoVacio = null;
    };


    //Validar campo usuario y contraseña vacío
    if (user.length == 0 && pass.length == 0) {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-vacio-crecenciales">Error. Usuario y Contraseña deben ser ingresados.</p>');
        campoVacio = campo.parentElement.querySelector('.campo-vacio-crecenciales');
    } else if (user.length == 0) {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-vacio-crecenciales">Error. Usuario debe ser ingresado.</p>');
        campoVacio = campo.parentElement.querySelector('.campo-vacio-crecenciales');
    } else if (pass.length == 0) {
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-vacio-crecenciales">Error. Contraseña debe ser ingresada.</p>');
        campoVacio = campo.parentElement.querySelector('.campo-vacio-crecenciales');
    }

    //Validar credenciales
    else if (user === "aaguirre@inacap.cl" && pass == "aAV07/10-2024"){
        window.location.href = "view/landingPage.html";
    }else if (user === "cgalindez@inacap.cl" && pass === "cGL07/11-2024") {
        window.location.href = "view/landingPage.html";
    } else if (user === "spizarro@inacap.cl" && pass === "sPA07/12-2024") {
        window.location.href = "view/landingPage.html";
    }else if (user == "admin" && pass == "admin"){
        window.location.href = "view/landingPage.html";
    }
    else{
        campo.parentElement.insertAdjacentHTML("beforeend",
            '<p class="campo-vacio-crecenciales">Contraseña o identificador de usuario incorrectos. Escriba la contraseña y el identificador de usuario correctos e inténtelo de nuevo.</p>');  
        campoVacio = campo.parentElement.querySelector('.campo-vacio-crecenciales')    
    };
};

form.addEventListener("submit", ingresar);
