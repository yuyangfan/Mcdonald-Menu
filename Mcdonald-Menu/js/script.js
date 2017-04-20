(function($) {
  "use strict";



$(document).ready(function(){
	
	
if (!(/android|blackberry|windows phone|iphone|ipod/i).test(navigator.userAgent.toLowerCase())) {

	var header = $('.mainHeader'),
		pos = header.offset();

		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+20 && header.hasClass('default')){
				header.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('switchedHeader').slideDown(200);
				});
			} else if($(this).scrollTop() <= pos.top+20 && header.hasClass('switchedHeader')){
				header.slideUp(200, function(){
					$(this).removeClass('switchedHeader').addClass('default').fadeIn(200);
				});
			}
	});
	
}
	
	

$('a.scroll').smoothScroll({
        speed: 800
        
});

$('button.scroll').smoothScroll({
	top:800,
	left:0
});




$(".itemDesc").css({ opacity: 0 });

			
	
$('.itemDesc').hover( function(){ 
	$(this).stop().animate({ opacity: 1 }, 'slow');
}, function(){ 
	$(this).stop().animate({ opacity: 0 }, 'slow'); 
});

	$('.itemDesc, .prjLink').hover(function () {
    var projDesc = $(this).find('.itemDesc');
    
});
			






});

})(jQuery);
