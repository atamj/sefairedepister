
jQuery( "document" ).ready( function ($) {

	$("#next").click(function(event) {
		$(this).toggle()
		$(".black .sa_owl_theme .owl-nav .owl-next").click();
	});

} )
