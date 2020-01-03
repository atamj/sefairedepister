
jQuery( "document" ).ready( function ($) {
    console.log($('.elementor-tab-title'));

    /*$('.elementor-tab-title')[0].removeClass('elementor-active')*/

    $('.elementor-tab-title').each(function () {
        $(this).removeClass('elementor-active')
    })

    let tabTitle = document.querySelector('.elementor-tab-title')

    tabTitle.forEach(elm => elm.classList.remove('elementor-active'));




} )
