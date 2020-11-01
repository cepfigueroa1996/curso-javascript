var articulos = [
	{nombre: "bicicleta", costo: 3000},
	{nombre: "Laptop", costo: 6000},
	{nombre: "PC escritorio", costo: 2000},
	{nombre: "Celular", costo: 1500},
	{nombre: "XBOX", costo: 5000},
	{nombre: "PS4", costo: 3000},
];

// retorna valores de true o false por lo que es util para validaciones rapidas de toma de decisiones
var caros = articulos.some(function(item){
	return item.costo >= 3500;
}

//reccorre todo el arreglo trayendo todos los registros
articulos.forEach(function(item){
	console.log(item.nombre);
})

//uso del find para filtrar por coincidencias
var encuentraArticulo = articulos.find(function(item){
	return item.nombre === "Laptop";
})

//mapea todos los valores del objeto que pertenezcan a nombre
var mapeo = articulos.map(function(item){
	return item.nombre;
})

//filtra bajo una condiciòn
var filtro = articulos.filter(function(item){
	return item.costo <= 3000
});

