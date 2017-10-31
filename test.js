$(function(){
	$("div").mouseenter(function(){
		height += 50px;
		width += 50px;
	});
	$("div").mouseleave(function(){
		height -= 50px;
		width -= 50px;
	});
});	