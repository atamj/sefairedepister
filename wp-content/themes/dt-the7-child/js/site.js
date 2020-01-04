/**
 * Campagne “Se Faire Dépister”
 * ==========================================================================
 * Why Locomotive?
 *
 * @package       Site
 * @subpackage    JavaScripts
 * @dependencies  jQuery
 *
 * Project Components :
 *    - Relative : site/*
 *    - Absolute : /modules/cocq/assets/scripts/src/site/*
 *
 * Customized Components :
 *    - Relative : vendor/*
 *    - Absolute : /modules/cocq/assets/scripts/src/vendor/*
 *
 * Bower Components :
 *    - Relative : ../../../libs/*
 *    - Absolute : /modules/cocq/libs/*
 *
 *
 * Built with :
 *   - Modernizr
 *   - jQuery 1.11
 *   - Jonathan Neal‘s Polyfill.io
 *   - Bootstrap‘s Transition, Collapse, Scrollspy
 */

'use strict';

var Site = window.Site || {};

+function ($, document, undefined) {

	// Where‘s jQuery?
	if ( typeof $ === 'undefined' ) return;

/* ==========================================================================
   Setup
   ========================================================================== */

/* Global Variables
   ========================================================================== */

	Site.body      = document.body
	Site.html      = document.documentElement
	Site.$body     = $(Site.body)
	Site.$html     = $(Site.html)
	Site.$document = $(document)
	Site.$window   = $(window)
	Site.$scroller = Site.$html.add(Site.$body);

	// Site.$html.toggleClass('no-js has-js');

	Site.Animations = Site.Animations || {};
	Site.Carousel   = Site.Carousel   || jQuery.noop;
	Site.Jumbotron  = Site.Jumbotron  || jQuery.noop;
	Site.Quiz       = Site.Quiz       || jQuery.noop;
	Site.Map        = Site.Map        || jQuery.noop;
	Site.Waypoint   = Site.Waypoint   || jQuery.noop;
	Site.Events     = Site.Events     || {};
	Site.Objects    = Site.Objects    || {};
	Site.Templates  = Site.Templates  || {};

	Site.Animations.offset   = 12;
	Site.Animations.duration = 0.2;
	Site.Animations.timing   = 'ease-in-out';

	Site.frameOffset = function () {
		return ( Site.$body.hasClass('framed') ? Site.Animations.offset : 0 );
	}

	Site.Animations.scrollTo = function ( x, y ) {
		Site.$scroller.animate({
			scrollTop: y - Site.frameOffset()
		}, Site.Animations.duration * 2000);
	}

/* ========================================================================== */

	Site.InternalLinks = function ( event ) {
	    
	   
        
		var $this = $(this)
		,   $carousel = $( event.delegateTarget )
		,   target = $this.data('carousel-target')
		,   href;

		if ( target > -1 ) {
			event.preventDefault();
			$carousel.trigger('owl.goTo', target);
		}
		else {
		    console.log('target', target)
		    
		    var matrix = $('.jumbotron1 .owl-wrapper').first().css('transform-origin');
    	    var translate = matrix.match(/-?[\d\.]+/g)
    	    var trans = translate[0] * 1
    	    console.log('teans', trans)
    	    console.log($( window ).width())
    	    if (trans > 2 * $( window ).width())
    	    {
    	        target = $("#quiz")
    	        console.log($( window ).width())
            } else {
    			href   = ( this.href && this.href.length ? '#' + this.href.getFragment().escapeSelector() : $this.data('target') )
    			target = $( href );
    			console.log('target', target)
            }

			if ( target.length ) {
				Site.Animations.scrollTo(0, target.offset().top);
			}
		}
	}

	Site.$document.on('click.cocq', '[rel="home"],[rel="internal"],#campaign-nav-primary a,#campaign-nav-secondary a,.waypoint__dot', Site.InternalLinks);

/* ========================================================================== */

	var Jumbotron     = Object.create(Site.Jumbotron.prototype)
	,   Questionnaire = Object.create(Site.Quiz.prototype)
	,   Locations     = Object.create(Site.Map.prototype);

	if ( Jumbotron.init )     Jumbotron.init();
	if ( Questionnaire.init ) Questionnaire.init();
	if ( Locations.init )     Locations.init();

/* ========================================================================== */

	if ( $.fn.scrollspy )
	{

		$('#dot-intro').on('activate.bs.scrollspy', function () {
			// console.log('Section 1');
			Jumbotron.elements.wrap.addClass('-inview');
		});

		$('#dot-faq').on('activate.bs.scrollspy', function () {
			// console.log('Section 2');
			Jumbotron.elements.wrap.removeClass('-inview');
		});

		$('#dot-quiz').on('activate.bs.scrollspy', function () {
			// console.log('Section 3');
			Jumbotron.elements.wrap.removeClass('-inview');
		});

		$('#dot-map').on('activate.bs.scrollspy', function () {
			// console.log('Section 4');
			Jumbotron.elements.wrap.removeClass('-inview');

			Locations.getGeolocation();
		});

		Site.$body.scrollspy({
			  target: '.waypoints > .waypoint__dot'
			, offset: Site.frameOffset() + 1
		});

	}

/* ========================================================================== */


$(document).ready(function(){
    $('.venobox').venobox({
        autoplay: true, 
    }); 
});


}(jQuery, document);
