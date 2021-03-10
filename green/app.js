window.onload = function() {
    let sub = $('#menu_bar > ul > li > ul');
    let main = $('#menu_bar > ul > li');
    sub.hide();

    main.hover(function() {
        sub.stop().slideDown(400);
    }, function() {
        sub.stop().slideUp(400);
    });

    let slide = $('#slide > div');
    slide.eq(0).animate({left: '0%'}, 0);
    slide.eq(1).animate({left: '100%'}, 0);
    slide.eq(2).animate({left: '200%'}, 0);

    let idx = 0;

    setInterval(function() {
        for(let i = 0; i < 3; i++) {
            let temp = slide.eq(i).css('left');
            let left = temp.substr(0, temp.length - 2);
            console.log(left/12);
            slide.eq(i).animate({left: `${left/12 - 100}%`}, 1000);
        }
        slide.eq(idx).animate({left: '200%'}, 0);
        idx++;

        if(idx == 3) idx = 0;
    }, 3000);

    let popup = $('#popup');
    popup.hide();

    let notice_btn = $('#notice_button');

    notice_btn.on('click', function() {
        popup.show();
    });

    let popup_btn = $('#popup > button');

    popup_btn.on('click', function() {
        popup.hide();
    })
}