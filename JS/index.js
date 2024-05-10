function irlandingPage(){
  window.location.href= "../view/landingPage.html";
}
const landingPage= document.getElementById("landingPage");
landingPage.addEventListener("click", irlandingPage);



function irPrestamo(){
  window.location.href= "../view/prestamos.html";
}
const menuPrestamo = document.getElementById("menuPrestamo");
menuPrestamo.addEventListener("click", irPrestamo);


function irAutores(){
  window.location.href= "../view/mante-autores.html";
}
const menuAutores = document.getElementById("menu-autores");
menuAutores.addEventListener("click", irAutores);




function irEditoriales(){
  window.location.href= "../view/mante-editoriales.html";
}
const menuEditorial = document.getElementById("menu-editorial");
menuEditorial.addEventListener("click", irEditoriales);


function irLibros(){
  window.location.href= "../view/mante-libros.html";
}
const menuLibros = document.getElementById("menu-libros");
menuLibros.addEventListener("click", irLibros);


function irUsuario(){
  window.location.href= "../view/usuarios.html";
}
const menuUsuarios = document.getElementById("menu-usuario");
menuUsuarios.addEventListener("click", irUsuario);


function irMultas(){
  window.location.href= "../view/multas.html";
}
const menuMultas = document.getElementById("menu-multas");
menuMultas.addEventListener("click", irMultas);


function irReportes(){
  window.location.href= "../view/reportes.html";
}
const menuReportes = document.getElementById("menu-reportes");
menuReportes.addEventListener("click", irReportes);


//Función para cerrar sesión
function cerrarSesion() {
    window.location.href = "../index.html";
  }

const cerrar = document.getElementById("salir");
cerrar.addEventListener("click", cerrarSesion)


//Función para ocultar-mostrar menu
document.querySelector('.btn-cabecera-menu').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('ocultar'),
  document.querySelector('.menu').classList.toggle('d-none'),
  document.querySelector('.contenido').classList.toggle('expandir')
});


//-------------------------------------------------
// Obtener la fecha actual del sistema
const fechaActual = new Date();

const nombresDiasSemana = [
  'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
];

// Obtener el nombre del día de la semana actual
const nombreDiaSemana = nombresDiasSemana[fechaActual.getDay()];

// Obtener el día actual en formato 'dd'
const dia = String(fechaActual.getDate()).padStart(2, '0');

// Obtener el mes actual en formato 'mm'
const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');

// Obtener el año actual en formato 'aaaa'
const anio = fechaActual.getFullYear();

//--------------------------------------------------------------

// Obtener la hora actual en formato 'hh'
const hora = String(fechaActual.getHours()).padStart(2, '0');

// Obtener los minutos actuales en formato 'mm'
const minutos = String(fechaActual.getMinutes()).padStart(2, '0');

// Formar la hora en el formato 'hh:mm'
const horaActual= `${hora}:${minutos}`;

// Formar la fecha en el formato 'nombre-del-día, dd-mm-aaaa'
const fechaHoraActual = `${nombreDiaSemana} ${dia}-${mes}-${anio}, ${horaActual}`;

// Obtener el elemento HTML con la clase 'fechaActual'
const fechaActualElemento = document.querySelector('.fechaActual');

// Actualizar el contenido del elemento con la fecha actual
fechaActualElemento.textContent = fechaHoraActual;