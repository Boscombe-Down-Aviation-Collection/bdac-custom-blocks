<?php
/**
 * Plugin Name: BDAC Gutenberg Blocks
 * Plugin URI: http://olberr-01.co
 * Description: Adds BDAC specific Custom Gutenberg blocks for the v21 theme
 * Author: Oliver
 * Version: 1.0.0
 */

    /**
     *  Custom Gutenberg functions
     */

    function bdac_default_colours() {
        add_theme_support( 
            'editor-color-palette', 
            array(
                array(
                    'name'  => 'BDAC Red',
                    'slug'  => 'red',
                    'color' => '#d91f26'
                ),
                array(
                    'name'  => 'BDAC Blue',
                    'slug'  => 'blue',
                    'color' => '#071f5b'
                ),
                array(
                    'name'  => 'BDAC White',
                    'slug'  => 'white',
                    'color' => '#fdfdfd'
                ),
                array(
                    'name'  => 'BDAC Black',
                    'slug'  => 'black',
                    'color' => '#304048'
                )
            ) 
        );

        add_theme_support(
            'editor-font-sizes',
            array(
                array(
                    'name' => 'Normal',
                    'slug' => 'normal',
                    'size'  => 16
                ),
                array(
                    'name' => 'Large',
                    'slug' => 'large',
                    'size'  => 24
                )
            )
        );
    };

    add_action( 'init', 'bdac_default_colours' );

    function bdac_gutenberg_blocks() {

        $build_index     = '/build/index.js';

        wp_register_script( 
            'custom-cta-js',
            plugins_url( $build_index, __FILE__ ),
            array(
                'wp-blocks',
                'wp-editor',
                'wp-components'
            ) 
        );

        register_block_type(
            'bdac/bdac-blocks',
            array(
                'editor_script' => 'custom-cta-js'
            )
        );
    }

    add_action( 'init', 'bdac_gutenberg_blocks' );