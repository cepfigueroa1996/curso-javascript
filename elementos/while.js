var alumnos = ["Carlos", "Adriana", "Billy", "Maira"];

function saludar(nombre){
	console.log("Hola "+nombre);
}

while(alumnos.length > 0){
	console.log(alumnos);//visualizamos como vamos eliminado registros de la matriz
	var estudiante = alumnos.shift();
	saludar(estudiante);
}