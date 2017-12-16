var elem1;
elem1=document.getElementById('delete');
console.log(elem1);
//addEventListener("evento a escuchar",nombre de funcion)
elem1.addEventListener("click",deleteTexto)
function tarea(){
	alert("hizo click");
}
function deleteTexto(){
	var titulo=document.getElementById("title-site");
	titulo.innerHTML="";

}


 var elem2=document.getElementById("update");
 elem2.addEventListener("click",updateTexto)
 function updateTexto(){
 	var titulo=document.getElementById("title-site");
	titulo.innerHTML="Titulo";
 }


