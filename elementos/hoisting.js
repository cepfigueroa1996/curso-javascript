// para que el hoisting aplique con variable estas primero deben ser  inicializadas y luego declaradas

console.log(nombre);


miFuncion();

function miFuncion(){
	console.log("hola "+nombre);
}

var nombre;
nombre ="Carlos enrique";