
jQuery( "document" ).ready( function ($) {
    console.log($('.elementor-tab-title'));

    /*$('.elementor-tab-title')[0].removeClass('elementor-active')*/
    $('.elementor-tab-title').forEach(elm => elm.removeClass('elementor-active'))

} )
