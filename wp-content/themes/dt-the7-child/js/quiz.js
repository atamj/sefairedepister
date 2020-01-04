/**
 * Quiz
 * ==========================================================================
 * @package       Campagne “Se Faire Dépister”
 * @subpackage    JavaScripts
 * @dependencies  jQuery, jQuery.owlCarousel, Carousel
 */

'use strict';

var Site = window.Site || {};

+function ($, document, undefined) {

	// Where‘s jQuery?
	if ( typeof $ === 'undefined' ) return;

/* ==========================================================================
   Core
   ========================================================================== */

	Site.Quiz = function () {};

	Site.Quiz.prototype = Object.create(Site.Carousel.prototype);

	Site.Quiz.prototype.elements = {
		  all       : $('[data-component="quiz"]')
		//questions : $('.question')
		, choices   : $('[data-output]', '.question')
		//outputs   : $('output', '.question')
	};

	// OwlCarousel <owlgraphic.com/owlcarousel/>
	Site.Quiz.prototype.options = function () {
		return {
			  slideSpeed  : 200
			, rewindNav   : false
			, navigation  : true
			, touchDrag   : true
			, afterInit   : this.setCount
			, afterAction : this.setStep
		};
	};

	Site.Quiz.prototype.events = function () {

		this.elements.all.on('click.cocq.question', '[data-output]', this.setAnswer);

		var parent;
		parent = Object.getPrototypeOf(this);
		parent = Object.getPrototypeOf(parent);

		return parent.events.apply(this, arguments);
	};

	Site.Quiz.prototype.setAnswer = function ( event ) {
		event.preventDefault();

		var $this   = $(this)
		,   answer  = $this.addClass('-active').data('output')
		,   $output = $this.parents('.question').children('output');

		$this.siblings('[data-output]').removeClass('-active').parents('.question').addClass('-answered').parents('.quiz').addClass('-answered');

		$output.html( answer );
	};

	Site.Quiz.prototype.setCount = function ( $base ) {

		$base
			.data('carousel-last', this.owl.owlItems.length)
			.attr('data-carousel-last', this.owl.owlItems.length);

	};

	Site.Quiz.prototype.setStep = function ( $base ) {

		$base
			.data('carousel-step', ++this.owl.currentItem)
			.attr('data-carousel-step', this.owl.currentItem)
			.removeClass('-answered');

//		Site.Carousel.prototype.$owlItems
//				.removeClass('is-current')
//				.eq(this.currentItem)
//					.addClass('is-current');

	};

/* ========================================================================== */

}(jQuery, document);
