var dato="Hola Juan";
//console.log("el valor de la variable dato =" + dato);
var num1=10;
var num2=20;

var caracteres=dato.length;
//console.log("numero de caracteres es " + caracteres);
// variable de tipo bool
var estado;
estado=true;
estado=false;

var fecha="01/12/2017";

var nueva_fecha=new Date();


console.log(fecha);
console.log(nueva_fecha);
var anioactual=nueva_fecha.getFullYear()
var mesactual=nueva_fecha.getMonth();
var dia=nueva_fecha.getDate();
var diasemana=nueva_fecha.getDay();
var hora=nueva_fecha.getHours();
var minutos=nueva_fecha.getMinutes();
var seconds=nueva_fecha.getSeconds();

console.log("año actual"+anioactual);
console.log("mes actual"+mesactual);
console.log("dia actual"+dia);
console.log("dia de la semana" +diasemana);



var meses=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
var diassemana=["dom","lun","mar","mie","juev","vie","sab"]


 var lista=["item1","item2","item3","item4","item5"]


var nombres=["cecila","alex","frank"]

var notas=[10,11,20,12,13];
var nombres=["cecila","alex","frank"]

var meses=[
	"enero",
	"febrero",
	"marzo",
	"abril",
	"mayo",
	"junio",
	"julio",
	"agost",
	"septiembre",
	"octubre",
	"noviembre",
	"diciembre"
	]


console.log(meses);
console.log(meses)
var mezcla=[10,"juan",true]
var numeros=[10,20,30];
var suma;
var cant=numeros.length;

suma = numeros[0]+ numeros[1]+numeros[2];
console.log("la cantidad de los elementos del arreglo es :" + cant);
console.log("la suma de los elementos es"+suma)
// remueve el último valor del arreglo
numeros.pop();
console.log(numeros);
// inserta un valor al final de la lista
numeros.push(56);
console.log(numeros);

// dato["nombre",edad,correo,codiigo,usario_activo]
var datos=["juan",22,"jtorriccelli@gmail.com",9983,true];
datos[0];
datos[1]

var persona={
	nombre:"juan carlos",
	edad:22,
	correo:"jtorriccelli@gmail.com",
	estado:true,
	tel:"957459878",
	notas:[10,10,20]
}
persona.nombre;
persona.edad;
persona.tel

persona.notas[2]

persona["nombre"]
persona["edad"]
persona["tel"]

var telefono1={
	marca:"apple",
	precio:"1",
	modelo:"8",
	anio:"2017",
	operado:"claro"
}

var telefono2={
	marca:"huawei",
	precio:"1",
	modelo:"p10",
	anio:"2017",
	operado:"claro"
}

var lista_telefono=[telefono1,telefono2];

lista_telefono[0].marca



