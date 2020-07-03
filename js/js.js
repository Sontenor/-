$(document).ready(function(){
		
	jQuery('#mycarousel').jcarousel({ /*wrap: 'circular',*/ scroll: 5, animation: 1000   });  
	jQuery('#mycarousel2').jcarousel({ /*wrap: 'circular',*/ scroll: 5, animation: 1000   });  
	jQuery('#mycarousel3').jcarousel({ /*wrap: 'circular',*/ scroll: 5, animation: 1000   });  
	jQuery('#mycarousel4').jcarousel({ /*wrap: 'circular',*/ scroll: 5, animation: 1000   }); 
	jQuery('#mycarousel5').jcarousel({ /*wrap: 'circular',*/ scroll: 5, animation: 1000   }); 
	
	
	
	
	// Product gallery width icons
	$("#pikame").PikaChoose({carousel:true});

	//modal image window
	$(".foto").fancybox({
				'transitionIn'	: 'none',
				'transitionOut'	: 'none'	
	});
	
	$('.show-block').toggle(function() { 
			 jQuery('.calculation-block').slideDown(400);},		
			 function() {
			 jQuery('.calculation-block').slideUp(400); 
	});	
	
		
	
});



  

 















