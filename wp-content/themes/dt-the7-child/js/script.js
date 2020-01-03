
jQuery( "document" ).ready( function ($) {
    console.log($('.elementor-tab-title'));

    /*$('.elementor-tab-title')[0].removeClass('elementor-active')*/

    $('.elementor-tab-title').each(function () {
        $(this).removeClass('elementor-active')
    })

    document.querySelector('.elementor-tab-title').classList.remove('elementor-active')

} )
