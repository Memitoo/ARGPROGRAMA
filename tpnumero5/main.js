// Actividad 1 //
// let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

// Actividad 2 //
// let tercerElemento= colores[2];
// console.log(tercerElemento); // "azul"

// Actividad 3 //
// console.log(colores[0][0]); // tengo mis dudas si entendi bien lo que pedi en este //

// Actividad 4 //
// let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
// console.log(numeroAleatorio);

// Actividad 5 //
/*let numeros = [];

for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}

console.log(numeros);*/

// Actividad 6 //
/*let numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100);
  numerosAleatorios.push(numeroAleatorio);
}

console.log(numerosAleatorios);*/

// Actividad 7 //
/*let copianumerosAleatorios = numerosAleatorios.slice();

console.log(numerosAleatorios);
console.log(copianumerosAleatorios);*/

// Actividad 8 //
/*let cadenas = [];
let cadena = "";

while (cadena.toLowerCase()!= "cancelar") {
  cadena = prompt("Ingresa una cadena de texto (o escribe 'cancelar' para salir):");
  if (cadena !== "cancelar") {
    cadenas.push(cadena);
  }
}

console.log(cadenas.join("-"));*/

// Actividad 9 // 
function convertirDolares() {
    let conversiondolares = document.getElementById("dolares").value;
    let pesos = conversiondolares * 300;
    document.getElementById("pesos").value = pesos;
}

// Actividad 10 //
function convertir() {
    let pesos1 = document.getElementById("pesos-input").value;
    let dolares1 = pesos1 / 300;
    document.getElementById("dolares-input").value = dolares1;
} 

// Actividad 11 //
function convertirGrados() {
    let celsius = document.getElementById("celsius-input").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit-output").value = fahrenheit;
  }

// Actividad 12 //
function recolectarDatos () {
  let nombreClient = document.getElementById("nombre_cliente").value;
  
  let material = document.getElementById("caja_Material").value;
  
  let comentario = document.getElementById("inp_coment").value;
  
  let tamanio1 = document.getElementById("chica").checked;
  let tamanio2 = document.getElementById("mediana").checked;
  let tamanio3 = document.getElementById("grande").checked;
  
  if (tamanio1==true){
      eleccion = document.getElementById("chica").value;
  } else if (tamanio2==true){
      eleccion = document.getElementById("mediana").value;
  } else if (tamanio3==true){
      eleccion = document.getElementById("grande").value;
  }else {
      eleccion = "";
  }
  
  if (nombreClient!="" && material!="" && eleccion!="" && comentario!=""){
      let concadenar = nombreClient + " ha pedido una caja de " + material + " con unas dimension " + eleccion + "." + comentario;
      document.getElementById("datofinal").value = concadenar;
  } else {
      document.getElementById("datofinal").value = "El pedido se encuentra incompleto, por favor rellene todos los datos";
      console.log("salio mal")
  }
  }

// Actividad 13 //
let numeroSecreto = Math.floor(Math.random() * 6); 
let intentos = 3;
function adivinarNumero() {
  let numero = document.getElementById("numero-input").value;
  if (numero == numeroSecreto) {
    document.getElementById("resultado-output").value = "felicitaciones, advinaste el número secreto!";
    document.getElementById("resultado-output").style.color = "green";
  } else {
    intentos--;
    if (intentos > 0) {
      if (numero < numeroSecreto) {
        document.getElementById("resultado-output").value = `te equivocaste. El número secreto es mayor. te quedan ${intentos} intentos.`;
      } else {
        document.getElementById("resultado-output").value = `te equivocaste. El número secreto es menor. te quedan ${intentos} intentos.`;
      }
      document.getElementById("resultado-output").style.color = "red";
    } else {
      document.getElementById("resultado-output").value = `lo siento mucho pero, ha perdido :(, El número secreto era ${numeroSecreto}.`;
      document.getElementById("resultado-output").style.color = "black";
      document.getElementById("numero-input").disabled = true;
      document.getElementById("adivinar-button").disabled = true;
    }
  }
}


// Actividad 14 // 
let NombreInp= document.getElementById('nombre');
      let botonAdd= document.getElementById('agregar');
      let listaDeNombres= document.getElementById('lista-nombres');
      
      botonAdd.addEventListener('click', () => {
        let nuevoNombre = NombreInp.value;
        let li = document.createElement('li');
        li.textContent = nuevoNombre;
        listaDeNombres.appendChild(li);
        inputNombre.value = '';
      });