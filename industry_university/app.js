window.onload = function() {
    let main = $('.main');
    let sub = $('.subMenu');

    sub.hide();

    main.hover(function() {
        sub.stop().slideDown(300);
    }, function() {
        sub.stop().slideUp(300);
    });

    let slider = $('.slideImg');

    slider.eq(0).animate({left: '0%'}, 0);
    slider.eq(1).animate({left: '100%'}, 0);
    slider.eq(2).animate({left: '200%'}, 0);

    let index = 0;

    setInterval(function() {
        for(let i = 0; i < 3; i++) {
            let temp = slider.eq(i).css('left');
            let left = temp.substr(0, temp.length - 2);
            let moveForce = left / 12 - 100;
            slider.eq(i).animate({left: `${moveForce}%`}, 1000);
        }

        slider.eq(index).animate({left: '200%'}, 0);
        index++;

        if(index == 3) {
            index = 0;
        }
    }, 3000);

    let popup = $('.popup');
    let popupBtn = $('.popupBtn');
    let notice = $('.noticeAction');

    popup.hide();

    notice.on('click', function() {
        popup.show();
    });

    popupBtn.on('click', function() {
        popup.hide();
    });
}