</section> <!-- .main -->

<?php get_sidebar( 'primary' ); ?>


<footer class="site-footer" role="contentinfo">
    <h4><a href="<?php echo esc_url( home_url() ); ?>"><?php bloginfo('title'); ?></a> <?php bloginfo('description'); ?></h4>
    <div class="design-credit">
        <span>
            <?php
                $site_url = 'https://www.competethemes.com/apex/';
                $footer_text = sprintf( __( '<a href="%s">Apex WordPress Theme</a> by Compete Themes.', 'apex' ), esc_url( $site_url ) );
                echo $footer_text;
            ?>
        </span>
    </div>
</footer>
</div>
</div><!-- .overflow-container -->

<?php wp_footer(); ?>

<!--[if IE 8 ]>
<script src="<?php echo get_template_directory_uri() . 'js/build/respond.min.js'; ?>"></script>
<![endif]-->

</body>
</html>