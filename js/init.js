$(function(){	
	$('.slider').mobilyslider({
		content: '.sliderContent',
		children: 'div',
		transition: 'fade',
		animationSpeed: 800,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		bullets: true,
		arrows: false,
		arrowsHide: false,
		prev: 'prev',
		next: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});
	
});
