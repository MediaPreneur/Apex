jQuery(document).ready(function($){

    var body = $('body');
    var siteHeader = $('#site-header');
    var titleContainer = $('#title-container');
    var toggleNavigation = $('#toggle-navigation');
    var menuPrimaryContainer = $('#menu-primary-container');
    var menuPrimary = $('#menu-primary');
    var menuPrimaryItems = $('#menu-primary-items');
    var toggleDropdown = $('.toggle-dropdown');
    var socialMediaIcons = siteHeader.find('.social-media-icons');
    var menuLink = $('.menu-item').children('a');

    toggleNavigation.on('click', openPrimaryMenu);

    function openPrimaryMenu() {

        if( menuPrimaryContainer.hasClass('open') ) {
            menuPrimaryContainer.removeClass('open');
            $(this).removeClass('open');

            menuPrimaryContainer.css('max-height', 0);

            // change screen reader text
            //$(this).children('span').text(objectL10n.openMenu);

            // change aria text
            $(this).attr('aria-expanded', 'false');

        } else {
            menuPrimaryContainer.addClass('open');
            $(this).addClass('open');

            var menuHeight = menuPrimary.outerHeight(true) + socialMediaIcons.outerHeight();

            menuPrimaryContainer.css('max-height', menuHeight);

            // change screen reader text
            //$(this).children('span').text(objectL10n.closeMenu);

            // change aria text
            $(this).attr('aria-expanded', 'true');
        }
    }

    // display the dropdown menus
    toggleDropdown.on('click', openDropdownMenu);

    function openDropdownMenu() {

        // get the buttons parent (li)
        var menuItem = $(this).parent();

        // if already opened
        if( menuItem.hasClass('open') ) {

            // remove open class
            menuItem.removeClass('open');

            $(this).siblings('ul').css('max-height', 0);

            // change screen reader text
            //$(this).children('span').text(objectL10n.openMenu);

            // change aria text
            $(this).attr('aria-expanded', 'false');
        } else {

            // add class to open the menu
            menuItem.addClass('open');

            var ulHeight = 0;

            $(this).siblings('ul').find('li').each(function(){
                ulHeight = ulHeight + $(this).height() + ( $(this).height() * 1.5 );
            });

            $(this).siblings('ul').css('max-height', ulHeight);

            // just needs long enough for the 0.2s animation fo play out
            setTimeout(function () {

                var newHeight = menuPrimary.outerHeight(true) + socialMediaIcons.outerHeight();

                menuPrimaryContainer.css('max-height', newHeight);

            }, 250);

            // change screen reader text
            //$(this).children('span').text(objectL10n.closeMenu);

            // change aria text
            $(this).attr('aria-expanded', 'true');
        }
    }

    /* allow keyboard access/visibility for dropdown menu items */
    menuLink.focus(function(){
        $(this).parents('ul').addClass('focused');
    });
    menuLink.focusout(function(){
        $(this).parents('ul').removeClass('focused');
    });
});

/* fix for skip-to-content link bug in Chrome & IE9 */
window.addEventListener("hashchange", function(event) {

    var element = document.getElementById(location.hash.substring(1));

    if (element) {

        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
            element.tabIndex = -1;
        }

        element.focus();
    }

}, false);