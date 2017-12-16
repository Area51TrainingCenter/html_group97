$(window).load(function(){
	cargardatos("noticias",10)

	$(".list-opciones li").click(function(){
		var contenido=$(this).attr("data-source");
		cargardatos(contenido,10);

	})



})

function cargardatos(section,limite){
	var url="http://www.latina.pe/latina/api_web/web/post/post_ia?section="+section+"&limit="+limite;
	$("#noticias").html("");
	$.getJSON(url,function(data){
		console.log(data);
		for(var i=0;i<data.length;i++){
			var img=data[i].image;
			var titulo=data[i].title;
			var sumilla=data[i].description;
			var link="http://www.latina.pe/"+data[i].url;
			$("#noticias").append('<div class="card" style="width: 300px;display:inline-block;vertical-aling:top">'
								  +'<img class="card-img-top" src="'+img+'" alt="Card image cap">'
								  +'<div class="card-body">'
								    +'<h4 class="card-title">'+titulo+'</h4>'
								   +' <p class="card-text"></p>'
								  +'<a href="'+link+'" class="btn btn-primary">Go somewhere</a>'
								 +'</div>'
								+'</div>')
		}
		
	})


}