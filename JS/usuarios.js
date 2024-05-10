class Usuario{
    constructor(nombre,rut,ntelefono,direccion){
        this.nombre = nombre;
        this.rut = rut;
        this.ntelefono = ntelefono;
        this.direccion = direccion;

    }
}


var usuario1 = new Usuario("Samuel","20.601.219-6", "994652393", "Av.las palmas")
var usuario2 = new Usuario("Cristian","27.641.219-6", "3433", "La Recova")
var usuario3 = new Usuario("Arnoldo","17.885.639-1", "99393", "La Serena")

class Ultimolibro{
    constructor(titulolibro,estado,fechaentrega,fechaprestamo){
        this.titulolibro = titulolibro;
        this.estado = estado;
        this.fechaentrega = fechaentrega;
        this.fechaprestamo = fechaprestamo;

    }
}

var libro = new Ultimolibro("Fundamentos de Programación","Sin retraso", "01/05/2024", "26/04/2024")
var libro1 = new Ultimolibro("Breve Historia de la Computación","Sin retraso", "04/05/2024", "29/04/2024")
var libro2 = new Ultimolibro("Sistemas Operativos Modernos","Retrasado", "04/05/2024", "29/04/2024")

class Deudas{
    constructor(titulolibro,diaretraso,monto){
        this.titulolibro = titulolibro;
        this.diaretraso = diaretraso;
        this.monto = monto;
      

    }
}

var deuda = new Deudas("Sistemas Operativos Modernos", "Sin retraso", "$0")
var deuda1 = new Deudas("Sistemas Operativos Modernos", "2 días", "$2.000")
var deuda2 = new Deudas("Fundamentos de Programación", "4 días", "$4.000")




var inputrut = document.getElementById("rut");
inputrut.addEventListener("blur", function(e){
    var rut = e.target.value;
    var campo = e.target;

    const patron = /^(\d{1,3}(?:\.\d{3}){2}-[\dkK])$/;
    if (rut.length == 0){
        campo.parentElement.insertAdjacentHTML("afterend",'<p id = "uno"> El campo Rut no debe de quedar vacio</p>')
        setTimeout(() => {
            var car = document.getElementById("uno");
           car.parentElement.removeChild(car);
               
        }, 3000);   

    }else if (!patron.test(rut)){
        campo.parentElement.insertAdjacentHTML("afterend",'<p id ="dos">El Rut debe de ser con guion y puntos</p>')
        setTimeout(() => {
            var car = document.getElementById("dos");
            car.parentElement.removeChild(car);
               
        }, 3000);   


    }
});  



function ingresar() {
    var rut = document.getElementById("rut").value;
    var rute = validarrut(rut);
    if (rute == true){
       console.log("valido")
    }else if (rute == false){
       alert("Rut ingresado no es valido")
    
}

    if (rut == "20.601.219-6"){
        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.textContent = usuario1.nombre;
        celda2.textContent = usuario1.rut;
        celda3.textContent = usuario1.ntelefono; 
        celda4.textContent = usuario1.direccion;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        document.getElementById("mitabla").querySelector("tbody").appendChild(fila);

        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.textContent = libro.titulolibro;
        celda2.textContent = libro.estado;
        celda3.textContent = libro.fechaentrega; 
        celda4.textContent = libro.fechaprestamo;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        document.getElementById("mitabla1").querySelector("tbody").appendChild(fila);

        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");

        celda1.textContent = deuda.titulolibro;
        celda2.textContent = deuda.diaretraso;
        celda3.textContent = deuda.monto; 

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        document.getElementById("mitabla2").querySelector("tbody").appendChild(fila);

    } else if (rut == "27.641.219-6"){
        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.textContent = usuario2.nombre;
        celda2.textContent = usuario2.rut;
        celda3.textContent = usuario2.ntelefono; 
        celda4.textContent = usuario2.direccion;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        document.getElementById("mitabla").querySelector("tbody").appendChild(fila);

        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.textContent = libro2.titulolibro;
        celda2.textContent = libro2.estado;
        celda3.textContent = libro2.fechaentrega; 
        celda4.textContent = libro2.fechaprestamo;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        document.getElementById("mitabla1").querySelector("tbody").appendChild(fila);

        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");

        celda1.textContent = deuda2.titulolibro;
        celda2.textContent = deuda2.diaretraso;
        celda3.textContent = deuda2.monto; 

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        document.getElementById("mitabla2").querySelector("tbody").appendChild(fila);


    }else if(rut == "17.885.639-1"){
        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.textContent = usuario3.nombre;
        celda2.textContent = usuario3.rut;
        celda3.textContent = usuario3.ntelefono; 
        celda4.textContent = usuario3.direccion;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        document.getElementById("mitabla").querySelector("tbody").appendChild(fila);

        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.textContent = libro1.titulolibro;
        celda2.textContent = libro1.estado;
        celda3.textContent = libro1.fechaentrega; 
        celda4.textContent = libro1.fechaprestamo;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        document.getElementById("mitabla1").querySelector("tbody").appendChild(fila);

        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");

        celda1.textContent = deuda1.titulolibro;
        celda2.textContent = deuda1.diaretraso;
        celda3.textContent = deuda1.monto; 

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        document.getElementById("mitabla2").querySelector("tbody").appendChild(fila);
    }


 
    
}

function validarrut(rutCompleto) {
    var valor = rutCompleto.replace(/[^0-9kK]+/g, '');
  
    if (valor.length < 7) {
      return false;
    }
  
    var cuerpo = valor.slice(0, -1);
    var dv = valor.slice(-1).toUpperCase();
  
    var suma = 0;
    var multiplo = 2;
  
    for (var i = 1; i <= cuerpo.length; i++) {
      var index = multiplo * valor.charAt(cuerpo.length - i);
      suma = suma + index;
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }

    var dvEsperado = 11 - (suma % 11);
  

    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;
  

    return dvEsperado == dv;
  }
