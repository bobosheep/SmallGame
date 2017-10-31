$(function(){
	$("div").mouseenter(function(){
		$("div").fadeTo('slow', 0.5);
	});
	$("div").mouseleave(function(){
		$("div").fadeTo('slow', 1);
	});
});	