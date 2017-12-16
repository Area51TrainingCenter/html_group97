$(window).ready(function(){
	/*$(".contenido").load("deportes.html")
	$("#deportes").click(function(){
		$(".contenido").load("deportes.html")
	})
	$("#noticias").click(function(){
		$(".contenido").load("noticias.html")
	})
	*/

	var url="https://jsonplaceholder.typicode.com/posts/1";
	var url2="https://jsonplaceholder.typicode.com/posts"
	$.getJSON(url2,function(data){
		//console.log(data[0].title);
		for (var i =0; i <data.length ; i++) {
			console.log(data[i].title)
			$(".news").append('<article class="item-new"><h1 id="title">'+data[i].title+'</h1><p class="contenido">'+data[i].body+'</p><span id="idnews">'+data[i].id+'</span></article>')
		};
		/*$("#title").text(data.title);
		$("#idnews").html(data.id);
		$(".contenido").html(data.body);*/
	})
})

var alumno={
	nombre:"juan",
	apellido:"ramos"
}

alumno.nombre