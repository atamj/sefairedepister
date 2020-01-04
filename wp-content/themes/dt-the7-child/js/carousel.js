/**
 * Carousel
 * ==========================================================================
 * @package       Campagne “Se Faire Dépister”
 * @subpackage    JavaScripts
 * @dependencies  jQuery, jQuery.owlCarousel
 */

'use strict';

var Site = window.Site || {};

+function ($, document, undefined) {

	// Where‘s jQuery?
	if ( typeof $ === 'undefined' ) return;

/* ==========================================================================
   Core
   ========================================================================== */

	Site.Carousel = function () {};

	// OwlCarousel <owlgraphic.com/owlcarousel/>
	Site.Carousel.prototype.defaults = function () {

		return {
			// Slide
			  singleItem      : true

			// Autoplay
			, autoPlay        : false
			, stopOnHover     : false

			// Navigation
			, navigation      : false
			, pagination      : false
			, navigationText  : [ this.elements.all.data('carousel-label-prev'), this.elements.all.data('carousel-label-next') ]

			// Lazy Load
			, lazyLoad        : true
			, lazyFollow      : true
			, lazyEffect      : 'fade'

			// Interaction
			, mouseDrag       : false
			, touchDrag       : false

			// Transition
			, transitionStyle : 'fade'
		};
	};
	

	Site.Carousel.prototype.init = function () {
	
		var elements = this.elements.all
		,   settings = $.extend( {}, this.defaults(), this.options() );

		if ( elements.length )
		{
			this.$carousel = elements;

			// jQuery OwlCarousel
			if ( $.fn.owlCarousel )
			{
				this.carousel = this.$carousel.owlCarousel( settings ).data('owlCarousel');
			} // $.fn.owlCarousel

			this.events();
		}

	};

	Site.Carousel.prototype.events = function () {

		this.$carousel.off('click.cocq.carousel').on('click.cocq.carousel', '.owl-go', Site.InternalLinks);
	};
	

	Site.Carousel.prototype.isCarousel = function ( test ) {

		if ( test.owl || test.owlWrapper )
			return true;

		else if ( test.carousel && ( test.carousel.owl || test.carousel.owlWrapper ) )
			return true;

		else if ( test.data && test.data.carousel && ( test.data.carousel.owl || test.data.carousel.owlWrapper ) )
			return true;

		else
			return false;

	};

/* ========================================================================== */

}(jQuery, document);
