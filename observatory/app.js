window.onload = function () {
    let main = $('.main > li');
    let sub = $('.sub');
    let subMenu = $('.sub > li');

    sub.hide();

    for(let i = 0; i < 4; i ++) {
        main.eq(i).hover(function() {
            sub.eq(i).stop().slideDown(300);
        }, function() {
            sub.eq(i).stop().slideUp(300);
        });

        sub.eq(i).hover(function() {
            sub.eq(i).stop().show(0);
        }, function() {
            sub.eq(i).stop().slideUp(300);
        }); 
    }

    // main.hover(function() {
    //     let idx = $(this).index();
    //     sub.eq(idx).stop().slideDown(300);
    // }, function() {
    // });

    let slider = $('.slideImg');
    let index = 0;

    slider.eq(1).hide();
    slider.eq(2).hide();

    setInterval(function () {
        if (index == 0) {
            slider.eq(0).fadeOut(1000);
            slider.eq(1).fadeIn(1000);
            index++;
        } else if (index == 1) {
            slider.eq(1).fadeOut(1000);
            slider.eq(2).fadeIn(1000);
            index++;
        } else if (index == 2) {
            slider.eq(2).fadeOut(1000);
            slider.eq(0).fadeIn(1000);
            index = 0;
        }
    }, 3000);

    let noticeBtn = $('.noticeBtn');
    let galleryBtn = $('.galleryBtn');
    let notice = $('.notice');
    let gallery = $('.gallery');

    gallery.hide();

    noticeBtn.on('click', function () {
        notice.show();
        gallery.hide();
        noticeBtn.css('background-color', '#ffffff');
        noticeBtn.css('color', '#333333');
        galleryBtn.css('background-color', '#444444');
        galleryBtn.css('color', '#ffffff');
    });

    galleryBtn.on('click', function () {
        gallery.show();
        notice.hide();
        galleryBtn.css('background-color', '#ffffff');
        galleryBtn.css('color', '#333333');
        noticeBtn.css('background-color', '#444444');
        noticeBtn.css('color', '#ffffff');
    });

    let popupAction = $('.popupAction');
    let popupBtn = $('.popupBtn');
    let popup = $('.popup');

    popup.hide();

    popupAction.on('click', function () {
        popup.show();
    });

    popupBtn.on('click', function () {
        popup.hide();
    });
}