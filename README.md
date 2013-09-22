Quick Carousel
===============

---

>quick-carousel is a jQuery carousel plugin which works like a magic. Using this you can even set the width of slide to 100% and every thing works fine.


Usage :-
---
You can initialize the plugin in 3 ways

    var carousel = $('#carousel-wrapper').quickCarousel('800px');
	var carousel = $('#carousel-wrapper').quickCarousel();

	var carousel = $('#carousel-wrapper').quickCarousel({
			width: '800px'
		  , height: '350px'
		  ,	duration: 800
		  ,	onChange: function(currentIndex){
				// console.log('onChange() ... ', currentIndex);
			}
		 ,	transition: 'fadeToggle' // 'slideToggle'
		  ,	autoPlay: 1500
		  , controlBar: true
		  , navigationArrows: true
		  , keyboardControls: true
		}
	);
---

Methods available are :-
---

    var carousel = $('#carousel-wrapper').quickCarousel();
    
    carousel.getIndex();     // Will return the current index of the slide
    carousel.slide(2);       // Will Slide to specified index
	carousel.moveRight();    // Will move one step towards right
	carousel.moveLeft();     // Will move one step towards left
	carousel.stopAutoPlay(); // Will stop the auto play
	carousel.removeKeyboardControls(); // Will disable the keyboard controls

    
Over-ride default options :-
---
 
You can override the default options by either using the object to initialize or 

    $.fn.quickCarousel.options['controlBar'] = true;

Version
----

1.0


Installation
--------------

Just include the library. Thats it!

License
----

The MIT License (MIT)

Copyright (c) 2013 Aamir Shah

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
