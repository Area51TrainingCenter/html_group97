$(window).load(function(){

	var url="http://www.latina.pe/latina/api_web/web/post/post_ia?section=deportes&limit=5";
	$.getJSON(url,function(data){ console.log(data)})	

})