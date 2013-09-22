$(function(){
	

	// $('#carousel-wrapper').quickCarousel('800px');
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
	// $.fn.quickCarousel.options['controlBar'] = true;
	// $('#carousel-wrapper').quickCarousel();

	setTimeout(function(){
		// carousel.getIndex();
		// carousel.slide(2);
		// carousel.getIndex();
		// carousel.stopAutoPlay();
		// carousel.removeKeyboardControls();
		// carousel.moveRight();
	},5000);
});



