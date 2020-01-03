<?php
/**
 * Your code here.
 *
 */
function add_widget_header(){
    register_sidebar([
       'name'               =>  esc_html__('Header colonne 1', 'the7'),
       'id'                 =>  'header1',
        'description'       =>  esc_html__('Ajouter des widgets', 'the7'),
        'before_widget'     =>  "<div id='header1'>",
        'after_widget'     =>  "</div>",
    ]);
    register_sidebar([
       'name'               =>  esc_html__('Header colonne 2', 'the7'),
       'id'                 =>  'header2',
        'description'       =>  esc_html__('Ajouter des widgets', 'the7'),
        'before_widget'     =>  "<div id='header2'>",
        'after_widget'     =>  "</div>",
    ]);
    register_sidebar([
       'name'               =>  esc_html__('Header colonne 3', 'the7'),
       'id'                 =>  'header3',
        'description'       =>  esc_html__('Ajouter des widgets', 'the7'),
        'before_widget'     =>  "<div id='header3'>",
        'after_widget'     =>  "</div>",
    ]);
}
add_action('widgets_init', 'add_widget_header');

function add_script(){
  /*  the7_register_script('script', plugins_url('js/script.js', __FILE__), ['jquery'], '1.2.0', true);
    wp_register_script('script', plugins_url('js/script.js', __FILE__), ['jquery'], '1.2.0', true);*/
/*    wp_enqueue_script('script');*/
    wp_enqueue_script('script',get_template_directory_uri().'-child/js/script.js', ['jquery'], '1.2.0', true);
    var_dump(get_template_directory_uri().'-child/js/script.js');

}
add_action('init', ('add_script'));