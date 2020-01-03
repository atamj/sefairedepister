function $(param){
   jQuery(param);
}

$( "document" ).ready( function () {
    console.log($('.elementor-tab-title'));

    $('.elementor-tab-title').removeClass('elementor-active')
} )

/*
(function($){

    console.log($('.elementor-tab-title'));

    $('.elementor-tab-title').removeClass('elementor-active')

})(jQuery);*/
