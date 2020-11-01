//el scope nos permite clasificar el alcance que tendra una variable
//tenemos 2 tipos de scope, scope global y scope local

var nombre = "carlos";

//el scope global comprende todas las variables que han sido declaradas de manera global.
//es decir fuera una funcion

function notas(){
	console.log("la nota de "+nombre+" es ");
}


//el scope local son aquellas variables usadas dentro de un funcion y solo pueden ser usadas dentro de la misma

function edad(){
	var age = 22;
	return nombre+" tiene: "+age+" años";
}