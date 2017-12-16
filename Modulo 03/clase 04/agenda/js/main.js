$("#btngrabar").click(function(){
	// anula el comportamiento por defecto
	event.preventDefault();

	// obtengo el valor del inp inpEmail
	var email=$("#inpEmail").val();
	var nombre=$("#inpNombre").val()
	var copiacheck=$("#copia").prop('checked')
	var emailsinespacios=$.trim(email);
	var nombresinespacios=$.trim(nombre);
	//juan

	/*if(emailsinespacios=="")
	{	
		alert("por favor ingresa datos");
		
	}
	else
	{
		if(nombresinespacios=="")
		{	alert("por favor ingresa datos");
			
		}
		else
		{
			
		}
	}*/
	/*emailsinespacios="";
	nombresinespacios="123";

	if(emailsinespacios=="" || nombresinespacios==""){
		// cuando se ejecuta
		console.log("revisa los datos");
	}
	else{
		// todo esta ok 
	}*/


	var letras;
	// texto=juanramos
	// texto.split('')
	var estadoarroba;
	var estadopunto;
	var ordenarroba;
	var ordenpunto;
	letras=emailsinespacios.split("");
	var cantidad=letras.length;
	for(var i=0;i<cantidad;i++){
		
		var digito=letras[i];
		if(digito=='@'){
			estadoarroba=true;
			ordenarroba=i;
		}
		if(digito=='.'){
			estadopunto=true;
			ordenpunto=i;
		}	

	}

	if(estadoarroba==true && estadopunto==true){
		if(ordenarroba<ordenpunto){
			console.log("es un correo casi valido");
		}	
	}
	console.log("el valo obtenido del check es "+copiacheck)
	//console.log(letras.length-1);
	/*letras[0];
	letras[1];
	..
	letras[9];
	*/

	/*$("#lista-contactos").append(""
		+"<article class='item-contacto'>"
		+"<h2>"+nombresinespacios+"</h2>"
		+"<span>Correo: </span>"
		+"</article>");*/
		var tipo=$("#inpTipo").val();
		console.log(tipo);
	$("#lista-contactos").append(`
		<article class="item-contacto `+tipo+` ">
		<h2>`+nombresinespacios+`</h2>
		<span>`+emailsinespacios+`</span>
		<p>tu amigo es de :`+tipo+`</p>
		</article>
		`)


})



$(".filtros li").click(function(){
	var opcion=$(this).attr('data-filtro');
	//opcion = escuela
	if(opcion=="todos"){
		$(".item-contacto").show();	
	}
	else{
		//var seleccion='.'+opcion;

		$(".item-contacto").hide();
		// .escuela
		$('.'+opcion).show()	
	}
		

})