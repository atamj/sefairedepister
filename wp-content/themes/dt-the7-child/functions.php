<?php
/**
 * Your code here.
 *
 */
function add_widget_header(){
    register_sidebar([
       'name'               =>  esc_html__('Header widget', 'the7'),
       'id'                 =>  'header_widget',
        'description'       =>  esc_html__('Ajouter des widgets', 'the7'),
        'before_widget'     =>  "<div id='header1'>",
        'after_widget'     =>  "</div>",
    ]);
    // register_sidebar([
    //    'name'               =>  esc_html__('Header colonne 2', 'the7'),
    //    'id'                 =>  'header2',
    //     'description'       =>  esc_html__('Ajouter des widgets', 'the7'),
    //     'before_widget'     =>  "<div id='header2'>",
    //     'after_widget'     =>  "</div>",
    // ]);
    // register_sidebar([
    //    'name'               =>  esc_html__('Header colonne 3', 'the7'),
    //    'id'                 =>  'header3',
    //     'description'       =>  esc_html__('Ajouter des widgets', 'the7'),
    //     'before_widget'     =>  "<div id='header3'>",
    //     'after_widget'     =>  "</div>",
    // ]);
}
add_action('widgets_init', 'add_widget_header');

function add_script_style(){

    wp_enqueue_script('script',get_template_directory_uri().'-child/js/script.js', ['jquery'], '1.0', true);

}
add_action('init', ('add_script_style'));