var estudiantes = ["Carlos", "Billy", "Maira", "Ambar"];

function saludar(estudiante){
	console.log("Hola "+estudiante);
}



for(i = 0; i < estudiantes.length; i++){
	saludar(estudiantes[i]);
}


for (estudiante of estudiantes){
	saludar(estudiante);
}