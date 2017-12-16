console.log("jquery funciona");





$("#menu-home").click(function(){
// tarea a ecutarse
	$(".menu-site li").removeClass("menu-activo");
	$("#menu-home").addClass("menu-activo");
})


$("#menu-about").click(function(){
// tarea a ecutarse
	$(".menu-site li").removeClass("menu-activo");
	$("#menu-about").addClass("menu-activo");
	
})


$("#menu-adopt").click(function(){
// tarea a ecutarse
	
	$(".menu-site li").removeClass("menu-activo");
	$("#menu-adopt").addClass("menu-activo");
})


$("#menu-contact").click(function(){
// tarea a ecutarse
	
	

	$(".menu-site li").removeClass("menu-activo");


	$("#menu-contact").addClass("menu-activo");
})


$("#dog1").click(function(){

	cargarDatos(0);	
	//$("#title-info").html("Info <strong>Perro1</strong>")
})
$("#dog2").click(function(){
	cargarDatos(1);
})

$("#dog3").click(function(){
	cargarDatos(2)
	
})

$("#dog4").click(function(){
	cargarDatos(3)
	//$("#title-info").text("Info del perro 4");
	//$("#detail-info").html("<p>Parrafo del perro1</p><p>segundo parrafo</p><p>tercer parrafo</p>");
	//$("#title-info").html("Info <strong>Perro1</strong>")
})

function cargarDatos(indice){
	
	$("#title-info").text(listaPerros[indice].title);
	$("#detail-info").html(listaPerros[indice].descripcion);

}


function cargarDatosv1(titulo,contenido){
	$("#title-info").text(titulo);
	$("#detail-info").html(contenido);

}


$("#btn-contact").click(function(){
		event.preventDefault();
	//$("#modal-registro").addClass("active-modal");
	//$("#modal-registro").show();
	$("#modal-registro").fadeIn();
	setTimeout(function(){ 
		$(".cerrar-modal").fadeIn();
	},5000);
	//return false;
})
//setInterval(function(){
//	console.log("hola");
//},2000)


//setInterval(funcion,2000)


$(".cerrar-modal").click(function(){
	//$("#modal-registro").hide();
	$("#modal-registro").fadeOut();
})




