var f = function(){
	var a = $('.jsHeight').width();
	var b = (a / 16) * 9
	$('.jsHeight').css({'height':b+'px'});
}

$(document).ready(f)
$(window).resize(f)