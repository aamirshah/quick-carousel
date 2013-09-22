// Polyfill for Object.create
if(typeof Object.create !== 'function'){
	Object.create = function(obj){
		function F(){};
		F.prototype = obj;
		return new F();
	}
}

/*====================================================================================
	=>                       jQuery quickCarousel Plugin                           <=

	Author: Aamir Shah
	Email : cse.aamir@gmail.com
	Dependencies : jQuery, quickCarousel.css
	Version: 1.0
	Licence: MIT

	Description: A simple and quick jquery Carousel Plugin.
====================================================================================*/


;(function($, window, document, undefined){
	
	var quickCarousel = {

		setCSS: function(){
			var self = this;

			self.$elm.css({
				'margin': '0 auto',
				'overflow': 'hidden',
				'position': 'relative'
			});

			self.$wrapper.css({
				'position': 'absolute',
				'left': 0,
				'float': 'left',
				'height': 'inherit'
			});

			self.$items.css({
				'padding': 0,
				'margin': 0,
				'float': 'left',
				'height': '100%'
			});

			self.$controlWrapper.css({
				'position': 'absolute',
				'left': '50%',
				'bottom': 0
			});

			self.$controlPanel.css({
				'list-style': 'none',
				'left': '-50%',
				'padding': 0,
				'position': 'relative',
				'margin': 0
			});
		},

		getDOMReferences: function(){
			var self = this;

			self.$wrapper      = self.$elm.find('.inner-wrapper');
			self.$items        = self.$elm.find('div.item');
			self.$arrowLeft    = self.$elm.find('#carousel-left');
			self.$arrowRight   = self.$elm.find('#carousel-right');					
			self.$controlPanel = self.$elm.find('#quick-carousel-control-panel');
			self.$controlWrapper = self.$elm.find('.control-panel-wrapper');
		},

		init: function(options, element){

			var self = this;			

			self.elm = element;
			self.$elm = $(element);
			
			// cache the references
			self.getDOMReferences();
		
			self.index = 0;
			self.length = self.$wrapper.children().length;
			self.max = self.length - 1;
			
			// Set basic CSS
			self.setCSS();
			
			// Check if only width is provided
			if(typeof options === 'string'){				
				self.options = $.fn.quickCarousel.options;
				self.options.width = options;
			} else {								
				self.options = $.extend({}, $.fn.quickCarousel.options, options);
			}


			// Set the elements width and height
			self.$elm.css('width', self.options.width);
			self.$elm.css('height', self.options.height);

			if (self.options.controlBar) {
				var i=0;
				for(i=0; i<self.length; i++){
					self.$controlPanel.append('<li class="box"></li>');
				}
				
				self.$controlPanel.find('li:first-child').addClass('active');	
			} else {
				self.$controlPanel.hide();
			}
		},

		measure: function(){
			var self = this;
			self.offset = self.$elm.width();

			self.$wrapper.css('width', self.offset*self.length+'px');
			self.$items.css('width', self.offset);
		},

		moveRight: function(){
			var self = this;

			if (self.index < self.max) {				
				self.index++;								
			} else if(self.index == self.max) {
				self.index = 0;
			}
			self.slide(self.index);			
		},

		moveLeft: function(){
			var self = this;

			if(self.index > 0){
				self.index--;						
			} else if(self.index == 0) {
				self.index = self.max;
			}

			self.slide(self.index);			
		},

		setListeners: function(){

			var self = this;

			if (self.options.navigationArrows){
				
				self.$arrowLeft.on('click', function(e){										
					self.moveLeft();		
				});

				self.$arrowRight.on('click', function(e){					
					self.moveRight();																					
				});	

			} else {
				self.$arrowLeft.hide();
				self.$arrowRight.hide();
			}
			

			if (self.options.controlBar) {

				self.$controlPanel.find('li.box').on('click', function(e){
				
					$(this).addClass('active').siblings().removeClass('active');					
					
					self.slide($(this).index());
				});	
			}
			

			if (self.options.keyboardControls) {

				$(document).on('keydown', function(event){
					
					switch (event.keyCode || event.charCode) {
						
				        case 37:
				            // LEFT
				            self.moveLeft();				   					
				            break;
				        case 38:
				            // UP
				            break;
				        case 39:
				            // RIGHT
				            self.moveRight();				   	
				            break;
				        case 40:
				            // DOWN
				        	break;
				    }
				});
				
			}
		},

		removeKeyboardControls: function(){
			$(document).off('keydown');
		},

		slide: function(index){
			var self = this;
			
			self.index = index;

			var newOffset = index * self.offset * -1;			
			
			self.$wrapper.clearQueue();

			var $currentSlide = $(self.$items[self.index]);
			
			if (self.options.transition) {

				$currentSlide[self.options.transition](self.options.duration/2, function(){
			
					$(this)[self.options.transition](self.options.duration);
					self.$wrapper.css('left',newOffset+'px');
				});

			} else {
				self.$wrapper.animate({'left':newOffset+'px'}, self.options.duration);				
			}

			if (typeof self.options.onChange === 'function') {
				self.options.onChange.call(self.elm, self.index);
			}			
			
			self.$controlPanel.find('li:nth-child('+(self.index+1)+')').addClass('active').siblings().removeClass('active');			
		},


		getIndex: function() {
			var self = this;		
			return self.index;
		},


		loop: function(){
			var self = this;

			if (self.options.autoPlay) {

				self.tempId = setTimeout(function() {
						
					if (self.index === self.max) {				
						self.index = 0;
					} else {
						self.index++;
					}
					

					self.slide(self.index);
					self.loop();

				},self.options.autoPlay);

				
			}			
		},

		stopAutoPlay: function() {
			var self = this;
			
			clearTimeout(self.tempId);
		}
	};

	

	$.fn.quickCarousel = function(options) {
			
		var carousel = Object.create(quickCarousel);
		
		carousel.init(options, this); // this == element
		carousel.measure();
		setTimeout(function(){
			carousel.setListeners();	
		});		
		carousel.loop();
		
				
		return carousel;
	};

	// Default Options
	$.fn.quickCarousel.options = {
		width: '100%'
	  , height: '300px'
	  ,	duration: 500
	  ,	onComplete: null
	  ,	autoPlay: null
	  ,	transition: null
	  ,	controlBar: true
	  ,	navigationArrows: true
	  ,	keyboardControls: null
	};
})(jQuery, window, document);





