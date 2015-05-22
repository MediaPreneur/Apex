<?php if( get_theme_mod( 'search_bar' ) != 'hide' ) : ?>
	<div class='search-form-container'>
		<button id="search-icon" class="search-icon">
			<i class="fa fa-search"></i>
		</button>
		<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url( '/' )); ?>">
			<label><?php _e('Search', 'apex'); ?></label>
			<input type="search" class="search-field" placeholder="<?php _e('Search...', 'apex'); ?>" value="" name="s" title="<?php _e('Search for:', 'apex'); ?>" />
			<input type="submit" class="search-submit" value='<?php _e('Go', 'apex'); ?>' />
		</form>
	</div>
<?php endif; ?>