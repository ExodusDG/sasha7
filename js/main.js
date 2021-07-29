$(document).ready(function() {
    var question1 = $('#question-1 button');
    var question2 = $('#question-2 button');
    var question3 = $('#question-3 button');
    $('#question-1 button').click(function() {
        $('#question-2').attr('style', 'opacity:1; transition: 0.4s');
    })
    $('#question-2 button').click(function() {
        $('#question-3').attr('style', 'opacity:1; transition: 0.4s');
    })
    $('.email__choise_button').click(function() {
        var currentClickedMail = $(this).text()
        console.log(currentClickedMail)
        var typedUsername = $('#join_input_email').val()
        $('#join_input_email').val(typedUsername + currentClickedMail)
    })


    $('.avatar_slider').slick({
        dots: true,
        autoplay: true
    });

    $('.email__choise').on("mousewheel", function(e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
    });

    /* JOIN PAGE */

    $('.buttons_gender > button').click(function() {
        $('.buttons_gender > button').removeClass('join_button-active')
        $(this).addClass('join_button-active')
    })

    $('.buttons_status > button').click(function() {
        $('.buttons_status > button').removeClass('join_button-active')
        $(this).addClass('join_button-active')
    })

    $('.buttons_interes > button').click(function() {
        $('.buttons_interes > button').removeClass('join_button-active')
        $(this).addClass('join_button-active')
    })
    $('.slider-carousel').slick({
        dots: true,
        autoplay: true
    });
    $('.step-1 .join_button').click(function() {
        if (question1.hasClass('join_button-active') && question2.hasClass('join_button-active') && question3.hasClass('join_button-active')) {
            $('#step-1-button').attr('style', 'opacity:1;')
        }
    })
    $('#confirm_change__mail').click(function() {
        $('.mail__change').css('opacity', '1');
        $('.mail__change').css('transform', 'scale(1)')
    })
    $('.popup__change_mail_close').click(function() {
        $('.mail__change').css('opacity', '0');
        $('.mail__change').css('transform', 'scale(0)')
    })
    $('.popup_resend').click(function() {
        $('.mail__email_resend').css('opacity', '1');
        $('.mail__email_resend').css('transform', 'scale(1)')

        setTimeout(() => {
            $('.mail__email_resend').css('opacity', '0');
            $('.mail__email_resend').css('transform', 'scale(0)')
        }, 3000);

    })



    if ($('body').width() < 490) {
        $('.mail__change').attr('style', 'top: calc(100vh - 250px)')
    }

});
$('.card').click(function() {
    $(this).find('.collapse').toggleClass('show')
});

$('.tariff-card').click(function() {
    $('.tariff-card').removeClass('tariff-card-active')
    $('.tariff-card-mounth-count').removeClass('tariff-card-mounth-count-active')
    $('.tariff-card-mounth').removeClass('tariff-card-mounth-active')
    $('.tariff-card-adv').removeClass('tariff-card-adv-active')
    $('.tariff-card-discount').removeClass('card-gradient-discount-active')

    $(this).addClass('tariff-card-active')
    $(this).find('.tariff-card-mounth-count').addClass('tariff-card-mounth-count-active')
    $(this).find('.tariff-card-mounth').addClass('tariff-card-mounth-active')
    $(this).find('.tariff-card-adv').addClass('tariff-card-adv-active')
    $(this).find('.tariff-card-discount').addClass('card-gradient-discount-active')
})