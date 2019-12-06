<?php
/**
 * Plugin Name: WP Snowflakes
 * Version: 1.0
 * Author: Georgi Sabev
 * Description: Plugin that shows snowflakes falling on all pages of the website.
 */

define('plugin_dir', plugin_dir_path(__FILE__));
define('plugin_root_url', plugins_url("wp-snowflakes/"));

//require plugin_dir . '/options-page.php';

//ENQUEUE STYLES AND SCRIPTS
function jor_snow_scripts()
{
    
    wp_enqueue_script('snow', plugins_url("scripts/snow.js", __FILE__), ['jquery'] );
    //wp_enqueue_script('additionaljs', plugins_url("scripts/additionaljs.js", __FILE__), ['jquery']);

    /*
    $data = [
        'text' => 'az'
    ];
    wp_localize_script( 'options-page-js', 'image', $data );
    */
}
add_action('wp_enqueue_scripts', 'jor_snow_scripts');

/*
function register_team_show_case_setting() {
    //register our settings
        register_setting('my_team_show_case_setting', 'jor_snowflake_image');
    }
    add_action('admin_init', 'register_team_show_case_setting');





//Add options page in admin panel
function jor_custom_menu_page()
{
    add_menu_page(
        __('Snowflakes', 'wp-snowflakes'),
        'Snowflakes',
        'manage_options',
        'wp-snowflakes/options-page.php',
        '',
        plugins_url("images/snowflake-admin-icon-reduced.png", __FILE__),
        null
    );
}
add_action('admin_menu', 'jor_custom_menu_page');

//add_option('wporg_custom_option', 'hello world!');
*/