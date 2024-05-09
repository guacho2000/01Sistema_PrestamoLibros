// Función para validar un RUT chileno con su dígito verificador
function validarRut(rut) {
    rut = rut.replace(/\./g, '').replace(/\-/g, '').toUpperCase(); // Remover puntos y guión, convertir a mayúsculas
    const rutSinDV = rut.slice(0, -1); // Obtener solo el RUT (sin dígito verificador)
    const dv = rut.slice(-1); // Obtener solo el dígito verificador
    const factor = [2, 3, 4, 5, 6, 7]; // Factores para multiplicar cada dígito del RUT

    // Validar longitud y formato
    if (rut.length !== 9 || !/^[0-9]+[0-9kK]{1}$/.test(rut)) {
        return false;
    }

    // Calcular dígito verificador esperado
    let suma = 0;
    for (let i = rutSinDV.length - 1, j = 0; i >= 0; i--, j++) {
        suma += parseInt(rutSinDV[i]) * factor[j % 6];
    }
    const dvEsperado = 11 - (suma % 11);
    const dvCalculado = (dvEsperado === 11) ? '0' : (dvEsperado === 10) ? 'K' : dvEsperado.toString();

    // Comparar dígito verificador calculado con el ingresado
    return dv === dvCalculado;
}

// Configurar evento de cambio en el campo de RUT
const rutInput = document.getElementById('run');
rutInput.addEventListener('change', function () {
    if (!validarRut(this.value)) {
        mostrarAlertaRutInvalido(this);
    } else {
        ocultarAlertaRutInvalido(this);
    }
});

// Función para mostrar alerta si el RUT no es válido
function mostrarAlertaRutInvalido(campo) {
    const alertaRut = document.getElementById('alertaRut');
    if (!alertaRut) {
        const alerta = document.createElement("div");
        alerta.id = 'alertaRut';
        alerta.classList.add("alert", "alert-danger", "mt-1", "rut");
        alerta.textContent = `El RUT ingresado no es válido.`;
        campo.parentNode.insertBefore(alerta, campo.nextSibling);
    }
}

// Función para ocultar alerta si el RUT es válido
function ocultarAlertaRutInvalido(campo) {
    const alertaRut = document.getElementById('alertaRut');
    if (alertaRut) {
        alertaRut.remove();
    }
}

// Configurar evento de cambio en el campo de mes de inicio
const mesInicioSelect = document.getElementById('mesInicio');
mesInicioSelect.addEventListener('change', function () {
    const mesSeleccionado = this.value;
    if (!mesSeleccionado) {
        mostrarAlertaMesVacio();
    } else {
        ocultarAlertaMesVacio();
    }
});

// Función para mostrar alerta si el mes de inicio no se ha seleccionado
function mostrarAlertaMesVacio() {
    const alertaMes = document.getElementById('alertaMes');
    alertaMes.textContent = 'Por favor seleccione un mes.';
    alertaMes.style.display = 'block';
}

// Función para ocultar alerta si el mes de inicio se ha seleccionado
function ocultarAlertaMesVacio() {
    const alertaMes = document.getElementById('alertaMes');
    alertaMes.textContent = '';
    alertaMes.style.display = 'none';
}

// Cargar autores
fetch("../data/autores.json")
    .then(response => response.json())
    .then(data => {
        const selectAutor = document.getElementById("autor");
        // Agregar opción predeterminada vacía
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "-- Seleccione un autor --";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        selectAutor.appendChild(defaultOption);
        // Agregar opciones de autores
        data.forEach(autor => {
            const option = document.createElement("option");
            option.value = autor.nombre;
            option.textContent = autor.nombre;
            selectAutor.appendChild(option);
        });
    })
    .catch(error => console.error("Error al cargar autores:", error));

// Deshabilitar el campo de libros inicialmente
const selectLibro = document.getElementById("libro");
selectLibro.disabled = true;

// Habilitar el campo de libros cuando se seleccione un autor
document.getElementById("autor").addEventListener("change", function () {
    const autorSeleccionado = this.value;
    fetch("../data/autores.json")
        .then(response => response.json())
        .then(data => {
            const autor = data.find(autor => autor.nombre === autorSeleccionado);
            if (autor) {
                // Habilitar el campo de libros
                selectLibro.disabled = false;
                // Limpiar el campo de libros
                selectLibro.innerHTML = "<option value='' selected>-- Seleccione un libro --</option>";
                autor.libros.forEach(libro => {
                    const option = document.createElement("option");
                    option.value = libro;
                    option.textContent = libro;
                    selectLibro.appendChild(option);
                });
            }
        })
        .catch(error => console.error("Error al cargar libros:", error));
});

// Configurar evento de cambio en los campos
const campos = document.querySelectorAll('input, select');
campos.forEach(campo => {
    campo.addEventListener('change', function () {
        if (!this.value.trim() && this.required) {
            mostrarAlertaCampoVacio(this);
        } else {
            ocultarAlertaCampoVacio(this);
        }
        
        // Validar que el campo de nombre y apellido no contenga números
        if ((campo.id === 'nombre' || campo.id === 'apellido') && /[0-9]/.test(this.value)) {
            mostrarAlertaCampoNumerico(this);
        } else {
            ocultarAlertaCampoNumerico(this);
        }
        
        // Validar RUT
        if (campo.id === 'run' && !validarRut(this.value)) {
            mostrarAlertaRutInvalido(this);
        } else {
            ocultarAlertaRutInvalido(this);
        }
        
        // Validar campo de día de inicio
        if (campo.id === 'diaInicio') {
            const valor = this.value.trim();
            const esNumero = /^[0-9]+$/.test(valor); // Verificar si el valor es solo numérico
            
            if (!esNumero || parseInt(valor) < 1 || parseInt(valor) > 31) {
                mostrarAlertaDiaInvalido(this);
            } else {
                ocultarAlertaDiaInvalido(this);
            }
        }
    });
});

// Configurar evento de cambio en el campo de año de inicio
const anioInicioInput = document.getElementById('yearInicio');
anioInicioInput.addEventListener('input', function () {
    const valor = this.value.trim();
    const esNumero = /^\d+$/.test(valor);
    if (valor.length !== 4 || !esNumero || parseInt(valor) > 2024) {
        mostrarAlertaAnioInvalido(this);
    } else {
        ocultarAlertaAnioInvalido(this);
    }
});

// Bloquear el campo de fecha de devolución al inicio
const fechaDevolucionInput = document.getElementById('fechaDevolucion');
fechaDevolucionInput.disabled = true;

function habilitarFechaDevolucion() {
    const diaInicio = document.getElementById('diaInicio').value;
    const mesInicio = document.getElementById('mesInicio').value;
    const yearInicio = document.getElementById('yearInicio').value;
    const tipoUsuario = document.getElementById('tipoUsuario').value;

    if (diaInicio && mesInicio && yearInicio && tipoUsuario) {
        let diasPlazo = 7; // Por defecto para alumnos

        if (tipoUsuario === 'docente') {
            diasPlazo = 20; // Para docentes
        }

        // Construir la fecha de inicio en el formato "yyyy-MM-dd"
        const fechaInicio = `${yearInicio}-${mesInicio}-${diaInicio}`;

        // Convertir la fecha de inicio en un objeto Date para manipularla
        const fechaInicioObj = new Date(fechaInicio);

        // Calcular la fecha de devolución sumando los días de plazo
        fechaInicioObj.setDate(fechaInicioObj.getDate() + diasPlazo);

        // Obtener la fecha de devolución en el formato "yyyy-MM-dd"
        const fechaDevolucion = fechaInicioObj.toISOString().split('T')[0];

        // Asignar la fecha de devolución al campo correspondiente
        document.getElementById('fechaDevolucion').value = fechaDevolucion;
    }
}


// Configurar eventos de cambio en los campos de día, mes, año de inicio y tipo de usuario
document.getElementById('diaInicio').addEventListener('change', habilitarFechaDevolucion);
document.getElementById('mesInicio').addEventListener('change', habilitarFechaDevolucion);
document.getElementById('yearInicio').addEventListener('change', habilitarFechaDevolucion);
document.getElementById('tipoUsuario').addEventListener('change', habilitarFechaDevolucion);


function mostrarAlertaAnioInvalido(campo) {
    const alerta = campo.nextElementSibling;
    if (!alerta || alerta.className !== 'alert alert-danger mt-1 anio') {
        const nuevaAlerta = document.createElement("div");
        nuevaAlerta.classList.add("alert", "alert-danger", "mt-1", "anio");
        nuevaAlerta.textContent = `El campo "Año de inicio del préstamo" debe tener 4 caracteres numéricos y no puede ser mayor a 2024.`;
        campo.parentNode.insertBefore(nuevaAlerta, campo.nextSibling);
    }
}

function ocultarAlertaAnioInvalido(campo) {
    const alerta = campo.nextElementSibling;
    if (alerta && alerta.className === 'alert alert-danger mt-1 anio') {
        alerta.remove(); // Eliminar la alerta si el valor es válido
    }
}

// Configurar evento para guardar préstamo
const botonGuardar = document.getElementById('botonGuardar');
botonGuardar.addEventListener('click', function () {
    registrarPrestamo();
});

function mostrarAlertaCampoVacio(campo) {
    if (!campo.nextElementSibling || campo.nextElementSibling.className !== 'alert alert-danger mt-1') {
        const alerta = document.createElement("div");
        alerta.classList.add("alert", "alert-danger", "mt-1");
        alerta.textContent = `El campo "${campo.previousElementSibling.textContent.replace(':', '')}" es obligatorio.`;
        campo.parentNode.insertBefore(alerta, campo.nextSibling);
    }
}

function ocultarAlertaCampoVacio(campo) {
    const alerta = campo.nextElementSibling;
    if (alerta && alerta.className === 'alert alert-danger mt-1') {
        alerta.remove();
    }
}

function mostrarAlertaCampoNumerico(campo) {
    if (!campo.nextElementSibling || campo.nextElementSibling.className !== 'alert alert-danger mt-1 numerico') {
        const alerta = document.createElement("div");
        alerta.classList.add("alert", "alert-danger", "mt-1", "numerico");
        alerta.textContent = `El campo "${campo.previousElementSibling.textContent.replace(':', '')}" no debe contener números.`;
        campo.parentNode.insertBefore(alerta, campo.nextSibling);
    }
}

function ocultarAlertaCampoNumerico(campo) {
    const alerta = campo.nextElementSibling;
    if (alerta && alerta.className === 'alert alert-danger mt-1 numerico') {
        alerta.remove();
    }
}



function mostrarAlertaDiaInvalido(campo) {
    if (!campo.nextElementSibling || campo.nextElementSibling.className !== 'alert alert-danger mt-1 dia') {
        const alerta = document.createElement("div");
        alerta.classList.add("alert", "alert-danger", "mt-1", "dia");
        alerta.textContent = `El valor del campo "${campo.previousElementSibling.textContent.replace(':', '')}" debe estar entre 1 y 31.`;
        campo.parentNode.insertBefore(alerta, campo.nextSibling);
    }
}

function ocultarAlertaDiaInvalido(campo) {
    const alerta = campo.nextElementSibling;
    if (alerta && alerta.className === 'alert alert-danger mt-1 dia') {
        alerta.remove();
    }
}

function ocultarAlertaCompletaFormulario() {
    const alertasDiv = document.getElementById("alertas");
    alertasDiv.innerHTML = ""; // Limpiar alertas anteriores
}

function verificarCamposVacios() {
    const campos = document.querySelectorAll('input, select');
    let camposVacios = false;

    campos.forEach(campo => {
        if ((!campo.value || campo.value.trim() === '') && campo.required) {
            camposVacios = true;
            mostrarAlertaCampoVacio(campo);
        }
        // Validar que el campo de nombre y apellido no contenga números
        if ((campo.id === 'nombre' || campo.id === 'apellido') && /[0-9]/.test(campo.value)) {
            camposVacios = true;
            mostrarAlertaCampoNumerico(campo);
        }
        
        // Validar campo de día de inicio
        if (campo.id === 'diaInicio' && (parseInt(campo.value) < 1 || parseInt(campo.value) > 31)) {
            camposVacios = true;
            mostrarAlertaDiaInvalido(campo);
        }
    });

    if (!camposVacios) {
        ocultarAlertaCompletaFormulario();
    }
}

function registrarPrestamo() {
    const alertasDiv = document.getElementById("alertas");
    alertasDiv.innerHTML = ""; // Limpiar alertas anteriores

    // Verificar campos vacíos
    const campos = document.querySelectorAll('input, select');
    let camposVacios = false;

    campos.forEach(campo => {
        
        // Validar RUT
        if (campo.id === 'run' && !validarRut(campo.value)) {
            camposVacios = true;
            mostrarAlertaRutInvalido(campo);
        }
    });
    
    if (camposVacios) {
        const alerta = document.createElement("div");
        alerta.classList.add("alert", "alert-danger", "mt-1");
        alerta.textContent = "Por favor complete todos los campos del formulario.";
        alertasDiv.appendChild(alerta);
        return; // Salir de la función si hay campos vacíos
    }

    // Crear alerta de préstamo registrado con éxito
    const alertaExito = document.createElement("div");
    alertaExito.classList.add("alert", "alert-success", "mt-1");
    alertaExito.textContent = "¡Préstamo registrado con éxito!";
    alertasDiv.appendChild(alertaExito);
}


