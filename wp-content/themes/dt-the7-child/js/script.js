
jQuery( "document" ).ready( function ($) {

	$("#next").click(function(event) {
		$(this).toggle()
		$(".owl-next").click();
	});

} )
