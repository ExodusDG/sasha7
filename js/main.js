/* MOBILE VERSION => CHANGE IMAGE */

var bodyWidth = $(window).width();

if (bodyWidth < 1025) {
    $('.not_image').attr('src', 'image/notification_mb.png').css('width', '50%');
    $('.msg__body_image > img').attr('src', 'image/chat_mb.png')
}

/* SMOOTH SCROLL */

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});

/* POPUP LOGIC */
var reloadTime = 45000;

var numberArray = []; //общий массив который хранит все числа
var fullpopupArray = [];
var popupArray = []; //массив с числами которые в popup

for (var i = 1; i <= 26; i++) {
    numberArray.push(i);
}

var activeNumbers = []; //массив с числами которые на странице

var numberCount = 6;

if (bodyWidth < 1024) {
    var numberCount = 4;
}

randNumber()

function randNumber() {
    let i = 0;
    while (i < numberCount) {
        var number = numberArray[Math.floor(Math.random() * numberArray.length)]
        position = numberArray.indexOf(number);
        if (~position) numberArray.splice(position, 1);
        i++; //счетчик проходов
        activeNumbers.push(number);
    }
}

$.each(activeNumbers, function(key, value) {
    $("<img>").attr('src', 'image/cards/img_' + value + '.png').attr('alt', 'card').appendTo('.not_cards'); //добавляем изображение;
});

setInterval(popupRandNumber, reloadTime)

function popupRandNumber() {
    let i = 0;
    while (i < 1) {
        var number = numberArray[Math.floor(Math.random() * numberArray.length)]
        position = numberArray.indexOf(number);
        if (~position) numberArray.splice(position, 1);
        i++; //счетчик проходов
        popupArray.push(number);
        reloadTime = 30000;
        setTimeout(() => {
            $('.popup__notify').css('transform', 'translate3d(100%, 0, 0)')
            setTimeout(() => {
                $('.popup__notify').html('');
            }, 500);
        }, 4000);

        if (i == 1) {
            spawnStart()
        }
    }
}

function spawnStart() {
    $.each(popupArray, function(key, value) {
        $("<div>", { id: value, alt: 'card' }).appendTo('.popup__notify');
        $("<img>").attr('src', 'image/cards/img_' + value + '.png').appendTo('#' + value); //добавляем изображение;
        $(`<div class="popup_close">X</div>`).appendTo('#' + value);
        var imgWidth = $('.popup__notify > div > img').width()
        $('.popup__notify > div').css('width', imgWidth + 'px')
        $('.popup__notify').css('opacity', '1')
        $('.popup__notify').css('transform', 'translate3d(0%, 0, 0)')
        numberArray.push(value)
        popupArray = []
        $('.popup_close').click(function() {
            $('.popup__notify').css('opacity', '0')
        });
    })
}

/* FAQ */

$('.different__body_item').click(function() {
    currentFAQ = $(this).find('.different__body_item_desc');
    currentFAQ.toggleClass('faq_show');
    currentFAQ.toggleClass('faq_active')
});


$(window).scroll(function() {
    if ($(document).scrollTop() > 300) { //прокручиваем страницу вниз на 100px
        $('.footer__body_bottom').css('transform', 'translate3d(0, 0%, 0)')
        $('.popup__notify').css('bottom', '14%');

        if (bodyWidth < 1024) {
            $('.popup__notify').css('bottom', '12%');
        }
        if (bodyWidth < 490) {
            $('.popup__notify').css('bottom', '20%');
        }
    } else { //если меньше чем на 100px
        $('.footer__body_bottom').css('transform', 'translate3d(0, 110%, 0)')
        $('.popup__notify').css('bottom', '2%');
    }
});