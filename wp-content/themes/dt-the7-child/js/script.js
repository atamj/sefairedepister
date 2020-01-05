
jQuery( "document" ).ready( function ($) {

	$("#next, .next").click(function(e) {
		e.preventDefault()
		$(".black .sa_owl_theme .owl-nav .owl-next").click();
	});
	$(".btn[data-toggle]").click(function(e) {
		e.preventDefault()
		let data = $(this).data('toggle')
		console.log("data= " + data)
		let div_to_toggle = $(this).closest('div').children(data)
		console.log($(this).closest('div'))

		div_to_toggle.toggle()

		// if ($(this).data('toggle') == "yes") 
		// {
		// 	$(this).parent('div').children('.yes').toggle()
		// }
		
	});

} )
