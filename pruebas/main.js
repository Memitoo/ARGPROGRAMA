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