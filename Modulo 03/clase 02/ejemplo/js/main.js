var btn_calcular=document.getElementById('calcular');

btn_calcular.addEventListener("click",sumar)
function sumar(){
	//var n1=document.getElementById("num1");
	//var val1=n1.value;
	//console.log(val1);
	var val1=document.getElementById('num1').value;
	var val2=document.getElementById('num2').value;
	var suma=parseInt(val1)+parseInt(val2);
	var resultado=document.getElementById('resultado');
	resultado.innerHTML=suma;
}
