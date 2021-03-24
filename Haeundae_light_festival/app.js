window.onload = function() {
    let main = $('.main');
    let sub = main.children('.sub');
    let mainMenu = main.children('li');

    $(mainMenu).hover(function() {
        $(sub).eq($(this).index() / 2).stop().slideDown(600);
    }, function() {
        $(sub).eq($(this).index() / 2).stop().slideUp(600);
    });

    $(sub).hover(function() {
        $(this).stop().slideDown(600);
    }, function() {
        $(this).stop().slideUp(600);
    });

    let slider = $('.slideContent');
    slider.eq(1).fadeOut(0);
    slider.eq(2).fadeOut(0);
    let index = 0;

    setInterval(function() {
        slider.eq(index % 3).fadeOut(1000);
        index++;
        slider.eq(index % 3).fadeIn(1000);
    }, 3000);

    let noticeBtn = $('.noticeBtn');
    let galleryBtn = $('.galleryBtn');
    let notice = $('.notice');
    let gallery = $('.gallery');
    
    noticeBtn.css('background-color', '#bbbbbb');
    gallery.hide();

    noticeBtn.on('click', function() {
        notice.show();
        gallery.hide();
        noticeBtn.css('background-color', '#bbbbbb');
        galleryBtn.css('background-color', '#ffffff');
    });

    galleryBtn.on('click', function() {
        gallery.show();
        notice.hide();
        galleryBtn.css('background-color', '#bbbbbb');
        noticeBtn.css('background-color', '#ffffff');
    });

    let popup = $('.popup');
    popup.hide();

    let trigger = $('.popupTrigger');
    let popupBtn = $('.popupBtn');

    trigger.on('click', function() {
        popup.show();
    });

    popupBtn.on('click', function() {
        popup.hide();
    })
}

function print(str) {
    console.log(str);
}