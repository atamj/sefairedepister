
jQuery( "document" ).ready( function ($) {
    /*console.log($('.elementor-tab-title'));*/

    /*$('.elementor-tab-title')[0].removeClass('elementor-active')*/

   /* $('.elementor-tab-title').each(function () {
        $(this).removeClass('elementor-active')
    })
*/
    let tabTitle = document.querySelectorAll('h3.elementor-tab-title')
    console.log(tabTitle)
    /*for (let i = 0; i < tabTitle.length(); i++ ){
        tabTitle[i].remove('elementor-active');
    }*/
    tabTitle.forEach(function(item){
        console.log(item.classList)
        item.classList.remove('elementor-active')
    })



} )
