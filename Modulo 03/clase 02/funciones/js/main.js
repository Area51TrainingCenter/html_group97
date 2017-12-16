
/*sumarnumeros();
sumarnumeros();
sumarnumeros();
sumarnumeros();

sumarv2(20,30);
sumarv2(10,25);
sumarv2(5,39);
*/
//var num1=prompt("ingresa 1er numero");
//var num2=prompt("ingresa 2do numero");

//sumarv2(num1,num2);

function sumarv2(valor1,valor2){
	var n1=parseInt(valor1);
	var n2=parseInt(valor2);
	var suma=n1+n2;
	//console.log(suma);	
	imprimir(suma);

	var valor_igv=igv(100);
	console.log(valor_igv);
}

function igv(monto){
	return monto*0.18;
}
function imprimir(texto){
	console.log(texto);
}



function sumarnumeros(){
	var n1=10;
	var n2=20;
	var suma=n1+n2;
	//console.log(suma);	
}

var fecha=new Date();
var mes=fecha.getMonth();
imprimir(mes);
console.log(nombreMes(mes,"ingles"));
function nombreMes(indicemes,idioma){
	
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
	];
	return meses[indicemes];
}
