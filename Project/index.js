$(document).ready(function() {
        	$("#slider").bxSlider({
			  auto: true,
			  pause: 3000,
			  pager: true,
			  pagerType: 'short',
			  pagerCustom: $("#pager"),
			  minSlides: 1,
			  maxSlides: 1,
			  moveSlides: 1,
			  slideWidth: 250,
			  slideMargin: 10,
			  randomStart: true
			});
    	});