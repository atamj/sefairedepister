
jQuery( "document" ).ready( function ($) {

	$("#next, .next").click(function(e) {
		e.preventDefault()
		$(".ls-gui-element.ls-nav-next").click();
	});
	$(".btn[data-toggle]").click(function(e) {
		e.preventDefault()

		$(".btn[data-toggle]").removeClass('red')
		$(this).addClass('red')
		
		$(".yes, .no").hide()
		let data = $(this).data('toggle')

		let div_to_toggle = $(this).closest('div').children(data)

		div_to_toggle.toggle()
	});

	jQuery("div.elementor-active").hide()
	jQuery(".elementor-active").removeClass('elementor-active')

} )
