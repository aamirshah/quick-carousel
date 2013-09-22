$(function(){
	
	// Carousel can be called in many ways
		// $('#carousel-wrapper').quickCarousel('800px');
		// $('#carousel-wrapper').quickCarousel();

	var carousel = $('#carousel-wrapper').quickCarousel({
			width: '800px'
		  , height: '350px'
		  ,	duration: 500
		  ,	onChange: function(currentIndex){
				// console.log('onChange() ... ', currentIndex);
			}
		  ,	transition: 'fadeToggle'
		  // ,	autoPlay: 500
		  , controlBar: true
		  , navigationArrows: true
		  , keyboardControls: true
		}
	);
	
	// We can directly acces the default options like this
		// $.fn.quickCarousel.options['controlBar'] = true;
	

	// Various Methods available are

		// carousel.getIndex();
		// carousel.slide(2);
		// carousel.moveRight();
		// carousel.moveLeft();
		// carousel.stopAutoPlay();
		// carousel.removeKeyboardControls();
});



