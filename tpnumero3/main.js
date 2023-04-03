
// Ejercicio 1 //
function IngresarDato (a) {
    a = typeof(a);
    console.log("el tipo de dato es:", a);
    return a;
}

IngresarDato();

// Ejercicio 2 //
function IngresarDatos (a,b) {
    a = prompt("Ingresa el primer numero");
    b = prompt("Ingresa el segundo numero");
    resta = a - b;
    console.log("El resultado es:", resta);
    return resta;
}

IngresarDatos ();

// Ejercicio 3 //
function CambioDeVariables (a,b) {
    let Numero1 = a;
    console.log("Numero a:", a, "Numero b:", b);
    Numero1 = b;
    b = a;
    console.log("Numero a:",Numero1, "Numero b:", b);
}

CambioDeVariables();

// Ejercicio 4 //
function CalcularCuadrado (lado) {
    const perimetro = lado * 4; 
    const superficie = lado ** 2;
    console.log("El perimetro del cuadrado es:", perimetro, "y su superficie es:", superficie);
}

CalcularCuadrado ();

// Ejercicio 5 //
function ConversionGrados (gradosF) {
    console.log("la temperatura en grados Fahrenheit es de:", gradosF + "°");
    const gradosCelsius = (gradosF - 32) / 1.8;
    console.log("la temperatura en grados Celsius es de:", gradosCelsius + "°");
    return gradosCelsius;
}

ConversionGrados ()

// Ejercicio 6 //
function CalcularFactorial (a) {
    a = prompt("Ingrese un numero no mayor a 10 para calcular su actorifal");
    
    if (a >=1 && a <= 10) {
    var factorial = 1;
    for(let i = 1; i <= a; i++) {
        factorial *=i;
    }

    } else {
    console.log(alert("El número ingresado es mayor de 10, ingresa un número válido."));
    }
    return factorial;
}

CalcularFactorial ();

// Ejercicio 7 //
const cadena = prompt("Ingrese una frase:");

const c_Procesada = cadena.toLowerCase().replace(/\s/g, "");

const c_Invertida = c_Procesada.split("").reverse().join("");

if (c_Procesada === c_Invertida) {
  console.log("La cadena es un palíndromo");
} else {
  console.log("La cadena no es un palíndromo");
}

// Ejercicio 8 //
const cadenaTipo = prompt("Ingrese una frase:");

console.log("La frase en mayusculas seria: " + cadenaTipo.toUpperCase());
console.log("La frase en minisculas seria: " + cadenaTipo.toLowerCase());

// Ejercicio 9 //
const nota = prompt("Ingrese la nota numérica del alumno:");

const numeroNota = parseFloat(nota);

switch (true) {
  case numeroNota >= 0 && numeroNota < 3:
    console.log("Muy deficiente");
    break;
  case numeroNota >= 3 && numeroNota < 5:
    console.log("Insuficiente");
    break;
  case numeroNota >= 5 && numeroNota < 6:
    console.log("Suficiente");
    break;
  case numeroNota >= 6 && numeroNota < 7:
    console.log("Bien");
    break;
  case numeroNota >= 7 && numeroNota < 9:
    console.log("Notable");
    break;
  case numeroNota >= 9 && numeroNota <= 10:
    console.log("Sobresaliente");
    break;
    case numeroNota < 0 || numeroNota > 10:
        console.log("Nota invalida, agregue una nota numerica entre 0 y 10");
        break;
  default:
    console.log("Nota invalida, agregue una nota numerica entre 0 y 10");
}

// Ejercicio 10 //
    const mes = prompt("ingrese un mes del 1 al 12");
    const mesNumero = parseFloat(mes);

    switch (true) {
        case mesNumero == 4 || mesNumero ==  6 || mesNumero == 9 || mesNumero == 11:
            console.log("el mes numero", mesNumero, "tiene 30 dias");
                break
        case mesNumero == 1 || mesNumero == 3 || mesNumero == 5 || mesNumero == 7 || mesNumero == 8 || mesNumero == 10 || mesNumero == 12:
            console.log("el mes numero", mesNumero, "tiene 31 dias")
                break
        case mesNumero == 2:
            console.log("el mes numero", mesNumero, "tiene 28 dias o 29 si el anio es bisiesto")
}

// Ejercicio 11 // 
function Piramide(numeros) {
    numeros = prompt("ingresar un numero del 1 al 10")

    if (numeros > 10) {
      console.log("El número ingresado no puede ser mayor de 10");
      return;
    }
  
    for (let i = 1; i <= numeros; i++) {
      let linea = "";
      for (let j = 1; j <= i; j++) {
        linea += j + " ";
      }
      console.log(linea);
    }
}

Piramide ();

// Ejercicio 12 //
function calcularCajas(bultosEnStock, bultosPorCaja) {
    bultosEnStock = prompt("ingrese un numero");
    bultosPorCaja = prompt("ingrese un numero");

    const cajasCompletas = Math.floor(bultosEnStock / bultosPorCaja);
    const bultosSueltos = bultosEnStock % bultosPorCaja;
  
    console.log("Cajas completas:", cajasCompletas);
    console.log("Bultos sueltos:", bultosSueltos);
  }

 calcularCajas()

 // Ejercicio 13 //
    const codigoAuto = prompt("Introduzca el código del auto que esta a la venta:");

    let descuento = 0;

    switch (codigoAuto) {
        case "fiesta":
            descuento = 0.05;
                break;
        case "focus":
            descuento = 0.1;
                break;
        default:
            console.log("Código de coche no válido");
    }

        if (descuento > 0) {
            console.log("Descuento del " + (descuento * 100) + "%");
}