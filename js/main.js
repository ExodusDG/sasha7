$(document).ready(function() {

    "use strict";
    var screenWidth = Number($(window).width());

    /* BLOG PAGE OPEN */
    $('.blog__body_item').click(function() {
        $('.blog__page > div').attr('style', 'display:none');
        $('.blog__body').attr('style', 'transform:translate3d(-100vw, 0,0)')
        $('.blog__page').attr('style', 'transform:translate3d(0vw, 0,0)')
        var currentBlogPost = $(this).attr('id').replace('blog_post_', '');
        if (screenWidth < 951) {
            $('#blog_' + currentBlogPost).attr('style', 'display:block');
        } else {
            $('#blog_' + currentBlogPost).attr('style', 'display:flex');
        }
    });
    $('.blog__page_back').click(function() {
            $('.blog__body').attr('style', 'transform:translate3d(0vw, 0,0)')
            $('.blog__page').attr('style', 'transform:translate3d(100vw, 0,0)')
        })
        /*END*/

    /* BLOG SLIDER */

    var blogWrapper = $('.blog__body_items');
    var blogScrollWidth = Number($('.blog__body_item').width() + Number($('.blog__body_item').css('margin-right').replace('px', '')));
    $('.button_blog').click(function() {
        var currentBlogButton = $(this).attr('id').replace('blog__', '');
        var blogCurrentTranslate = $('.blog__body_items').attr('style').replace('transform:translateX(', '').replace('px)', '');
        /* MAX SCROLL WIDTH*/
        var blogPostsCount = $('.blog__body_items > div').length;
        var blogMaxWidth = (blogPostsCount - 4) * blogScrollWidth;
        if (currentBlogButton == 'left') {
            if (blogCurrentTranslate == 0) {
                return false;
            }
            var blogTranslateWidth = Number(blogCurrentTranslate) + Number(blogScrollWidth);
            blogWrapper.attr('style', 'transform:translateX(' + blogTranslateWidth + 'px)')

        } else if (currentBlogButton == 'right') {
            var blogPostsCount = $('.blog__body_items > div').length;
            if ((blogCurrentTranslate * -1) > blogMaxWidth) {

                return false;
            }
            var blogTranslateWidth = Number(blogCurrentTranslate) - Number(blogScrollWidth);
            blogWrapper.attr('style', 'transform:translateX(' + blogTranslateWidth + 'px)')
        }
    });

    /*END*/


    /* GALLERY SLIDER */

    var scrollWrapper = $('.gallery_body_photo')
    var wrapperWidth = Number($('.gallery__body_wrapper').width()) + Number($('.slide_item').css('margin-right').replace('px', ''));
    scrollWrapper.attr('style', 'transform:translateX(0px)')
    $('.button_slider').click(function() {
        var currentTranslate = Number($('.gallery_body_photo').attr('style').replace('transform:translateX(', '').replace('px)', ''));
        var currentButton = $(this).attr('id');
        var slideCount = $(".slide > div[class!='slide_item photo_hidden_class']").length; //
        var slideWidth = $('.slide > div').width();
        var maxWrapperWidth = slideCount * slideWidth * (-1);

        if (currentButton == 'left_b') {
            if (currentTranslate == 0) {
                return false;
            }
            if (screenWidth < 601) {
                var scrollWidth = currentTranslate + Number($('.slide_item').width()) + Number(($('.slide_item').css('margin-right').replace('px', '')));
            } else {
                var scrollWidth = currentTranslate + wrapperWidth;
            }
            $(scrollWrapper).attr('style', 'transform:translateX(' + scrollWidth + 'px)');

        } else if (currentButton == 'right_b') {
            if (scrollWidth < maxWrapperWidth) {
                return false;
            }
            if (screenWidth < 601) {
                var scrollWidth = currentTranslate - (Number($('.slide_item').width()) + Number(($('.slide_item').css('margin-right').replace('px', ''))));
            } else {
                var scrollWidth = currentTranslate - wrapperWidth;
            }
            $(scrollWrapper).attr('style', 'transform:translateX(' + scrollWidth + 'px)');
        }
    })

    /* END */

    /* GALLERY SORTER */

    $('.gallery__body_sort > p').click(function() {
        var currentClickedButton = $(this).attr('id').replace('_button', '');
        //    var hiddenItem = $('.slide_item').not('#' + currentClickedButton + '');
        function slideHide() {
            $('.slide_item').removeClass('photo_hidden_class').show();
            $('.slide_item').not('.' + currentClickedButton + '').addClass('photo_hidden_class').hide();

        }

        if (currentClickedButton == 'all') {
            $('.slide_item:hidden').show();
            $('.slide_item').removeClass('photo_hidden_class');
        } else if (currentClickedButton == 'photography') {
            slideHide()
            $('.gallery_body_photo').attr('style', 'transform:translateX(0px)');
        } else if (currentClickedButton == 'uiux') {
            slideHide()
            $('.gallery_body_photo').attr('style', 'transform:translateX(0px)');
        } else if (currentClickedButton == 'creative') {
            slideHide()
            $('.gallery_body_photo').attr('style', 'transform:translateX(0px)');
        }
    })

    /* END */

    /* MINI MENU OPEN*/
    function menuResize() {
        setTimeout(menuFullHide, 500)
        $('.menu_full').css('transform', 'translate3d(-300px, 0, 0)');

        function menuFullHide() {
            $('.menu').addClass('menu_resized');

            setTimeout(() => {
                $('.menu_full').css('display', 'none');
            }, 500);
        }
        setTimeout(menuMiniShow, 1000)

        function menuMiniShow() {
            $('.menu_minimize').css('display', 'block');

            setTimeout(() => {
                $('.menu_minimize').css('transform', 'translate3d(0px, 0, 0)');
            }, 100);

        }
    }

    $('#toggle-button').click(function() {
            menuResize()
        })
        /* END */
        /* MINI MENU CLOSE*/

    $('#toggle-button_mini').click(function() {
            menuMiniHide()

            function menuMiniHide() {
                $('.menu_minimize').css('transform', 'translate3d(150px, 0, 0)');

                setTimeout(() => {
                    $('.menu_minimize').css('display', 'none');
                }, 500);
            }
            menuFullResize()

            function menuFullResize() {
                $('.menu_full').css('display', 'block');
                $('.menu').removeClass('menu_resized');
                setTimeout(() => {
                    $('.menu_full').css('transform', 'translate3d(0px, 0, 0)');
                }, 500);
            }
        })
        /* END */
        /* MAIN SLIDER */

    $('#home, #home_mini, #home_mb').click(homeActive)
    $('#about, #about_mini, #about_mb').click(aboutActive);
    $('#gallery, #gallery_mini, #gallery_mb, .home__body_button').click(galleryActive);
    $('#blog, #blog_mini, #blog_mb').click(blogActive);
    $('#contact, #contact_mini, .menu_button, #contact_mb').click(contactActive);

    var progressBarWidth = $('.progress__bar').width();
    var scrollBarWidth = progressBarWidth / 5;
    $('.bar_info').css('width', scrollBarWidth);

    var countSlide = 1;

    $('.navigation__buttons > div').click(function() {
            var currentClick = $(this).attr('id');

            if (currentClick == 'left') {
                countSlide--;
            } else if (currentClick == 'right') {
                countSlide++;
            }

            if (countSlide < 1) {
                countSlide = 5;
                contactActive()
            } else if (countSlide > 5) {
                countSlide = 1;
                homeActive();
            }

            if (countSlide == 1) {
                homeActive();
            } else if (countSlide == 2) {
                aboutActive()
            } else if (countSlide == 3) {
                galleryActive()
            } else if (countSlide == 4) {
                blogActive()
            } else if (countSlide == 5) {
                contactActive()
            }

        })
        /* END */
        /* HOME PAGE ACTIVE  */

    function homeActive() {
        $('.main__content_wrapper').css('transform', 'translate3d(0, 0vh, 0)');
        $('.menu__navigation > ul > li > a').removeClass('menu_navigation_active');
        $('#home').addClass('menu_navigation_active');

        $('.menu_mini_links > i').removeClass('menu_mini_links_active')
        $('#home_mini').addClass('menu_mini_links_active');

        $('.mb_menu_links > i').removeClass('menu_mini_links_active');
        $('#home_mb').addClass('menu_mini_links_active');

        /* SCROLL BAR */
        $('.bar_number').css('transform', 'translate3d(0, 35px, 0)');

        function changeNumber() {
            $('.bar_number').text('01')
        }

        setTimeout(changeNumber, 500);

        function changeNumberPos() {
            $('.bar_number').css('transform', 'translate3d(0, 0px, 0)');
        }

        setTimeout(changeNumberPos, 500);

        $('.bar_info').css('transform', 'translate3d(' + 0 + 'px, 0, 0)')
    }
    /* END */
    /* ABOUT PAGE ACTIVE  */

    function aboutActive() {
        $('.main__content_wrapper').css('transform', 'translate3d(0, -100vh, 0)');
        $('.menu__navigation > ul > li > a').removeClass('menu_navigation_active');
        $('#about').addClass('menu_navigation_active');

        $('.menu_mini_links > i').removeClass('menu_mini_links_active')
        $('#about_mini').addClass('menu_mini_links_active');

        $('.mb_menu_links > i').removeClass('menu_mini_links_active');
        $('#about_mb').addClass('menu_mini_links_active');

        /* SCROLL BAR */
        $('.bar_number').css('transform', 'translate3d(0, 35px, 0)');

        function changeNumber() {
            $('.bar_number').text('02')
        }

        setTimeout(changeNumber, 500);

        function changeNumberPos() {
            $('.bar_number').css('transform', 'translate3d(0, 0px, 0)');
        }

        setTimeout(changeNumberPos, 500);

        $('.bar_info').css('transform', 'translate3d(' + scrollBarWidth + 'px, 0, 0)')
    }
    /* END */
    /* GALLERY PAGE ACTIVE  */

    function galleryActive() {
        $('.main__content_wrapper').css('transform', 'translate3d(0, -200vh, 0)');
        $('.menu__navigation > ul > li > a').removeClass('menu_navigation_active');
        $('#gallery').addClass('menu_navigation_active');

        $('.menu_mini_links > i').removeClass('menu_mini_links_active')
        $('#gallery_mini').addClass('menu_mini_links_active');

        $('.mb_menu_links > i').removeClass('menu_mini_links_active');
        $('#gallery_mb').addClass('menu_mini_links_active');

        /* SCROLL BAR */
        $('.bar_number').css('transform', 'translate3d(0, 35px, 0)');

        function changeNumber() {
            $('.bar_number').text('03')
        }

        setTimeout(changeNumber, 500);

        function changeNumberPos() {
            $('.bar_number').css('transform', 'translate3d(0, 0px, 0)');
        }

        setTimeout(changeNumberPos, 500);

        $('.bar_info').css('transform', 'translate3d(' + scrollBarWidth * 2 + 'px, 0, 0)')
    }
    /* END */
    /* BLOG PAGE ACTIVE  */

    function blogActive() {
        $('.main__content_wrapper').css('transform', 'translate3d(0, -300vh, 0)');
        $('.menu__navigation > ul > li > a').removeClass('menu_navigation_active');
        $('#blog').addClass('menu_navigation_active');

        $('.menu_mini_links > i').removeClass('menu_mini_links_active')
        $('#blog_mini').addClass('menu_mini_links_active');

        $('.mb_menu_links > i').removeClass('menu_mini_links_active');
        $('#blog_mb').addClass('menu_mini_links_active');

        /* SCROLL BAR */
        $('.bar_number').css('transform', 'translate3d(0, 35px, 0)');

        $('.menu_mini_links > i').removeClass('menu_mini_links_active')
        $('#blog_mini').addClass('menu_mini_links_active');

        function changeNumber() {
            $('.bar_number').text('04')
        }

        setTimeout(changeNumber, 500);

        function changeNumberPos() {
            $('.bar_number').css('transform', 'translate3d(0, 0px, 0)');
        }

        setTimeout(changeNumberPos, 500);

        $('.bar_info').css('transform', 'translate3d(' + scrollBarWidth * 3 + 'px, 0, 0)')
    }
    /* END */
    /* CONTACT PAGE ACTIVE  */

    function contactActive() {
        $('.main__content_wrapper').css('transform', 'translate3d(0, -400vh, 0)');
        $('.menu__navigation > ul > li > a').removeClass('menu_navigation_active');
        $('#contact').addClass('menu_navigation_active');

        $('.menu_mini_links > i').removeClass('menu_mini_links_active')
        $('#contact_mini').addClass('menu_mini_links_active');

        $('.mb_menu_links > i').removeClass('menu_mini_links_active');
        $('#contact_mb').addClass('menu_mini_links_active');

        /* SCROLL BAR */
        $('.bar_number').css('transform', 'translate3d(0, 35px, 0)');

        $('.menu_mini_links > i').removeClass('menu_mini_links_active')
        $('#contact_mini').addClass('menu_mini_links_active');

        function changeNumber() {
            $('.bar_number').text('05')
        }

        setTimeout(changeNumber, 500);

        function changeNumberPos() {
            $('.bar_number').css('transform', 'translate3d(0, 0px, 0)');
        }

        setTimeout(changeNumberPos, 500);

        $('.bar_info').css('transform', 'translate3d(' + scrollBarWidth * 4 + 'px, 0, 0)')
    }
    /* END */

    /* ADAPTIVE */

    /* END */
});