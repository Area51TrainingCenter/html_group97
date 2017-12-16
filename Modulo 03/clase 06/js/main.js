$(".link-up").click(function(){
		$("body,html").animate({scrollTop:0},500)
})
$("#menu-services").click(function(){
	var topelmento=$(".sec-serivces").offset().top
	var newtop=topelmento-30;
	//var leftelemento=$(".sec-serivces").offeset().left;
	
	$("body,html").animate({scrollTop:newtop},500)	
})

$(window).scroll(function(){
	//console.log("estan usando el scroll");
	var top=$(window).scrollTop();
	console.log("en este momento el scroll se encuentra en la posicion :" +top)
	if(top>20){
		$(".link-up").fadeIn();
	}
	else{
		$(".link-up").fadeOut();	
	}
})