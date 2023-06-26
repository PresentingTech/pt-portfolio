jQuery(document).ready(function(){

	// Home Slider
	jQuery('#home-slider').owlCarousel({
		loop:true,
		margin:10,
		items:1,
		nav:false,
		dots: true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true
	});
	
	// Services Slider
	jQuery('#services-slider').owlCarousel({
		loop:true,
		margin:25,
		items:3,
		nav:true,
		dots: false,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			575:{
				items:1
			},
			767:{
				items:2
			},
			991:{
				items:3
			}
		}
	});
	
	// Products Slider
	jQuery('#products-slider').owlCarousel({
		loop:true,
		margin:25,
		items:3,
		nav:true,
		dots: false,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			575:{
				items:1
			},
			767:{
				items:2
			},
			991:{
				items:3
			}
		}
	});
	
	// Partners Slider
	jQuery('#partners-slider').owlCarousel({
		loop:true,
		margin:40,
		items:5,
		nav:false,
		dots: false,
		autoplay:false,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:2
			},
			575:{
				items:3
			},
			767:{
				items:4
			},
			991:{
				items:5
			}
		}
	});

});