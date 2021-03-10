window.onload = function() {
    let top = $('.top > li > div');
    let bottom = $('.top > li > ul');
    
    bottom.hide();
    
    top.hover(function() {
        bottom.stop().slideDown(300);
    }, function() {
        bottom.stop().slideUp(300);
    });

    bottom.hover(function() {
        bottom.stop().slideDown(300);
    }, function() {
        bottom.stop().slideUp(300);
    });

    let slider = $('#slider > img');
    slider.eq(1).animate({top: '300px'}, 0);
    slider.eq(2).animate({top: '600px'}, 0);
    let idx = 0;
    setInterval(function() {
        for(let i = 0; i < 3; i++) {
            let temp = slider.eq(i).css('top');
            let h = temp.substr(0, temp.length - 2);
            slider.eq(i).animate({top: `${h - 300}px`}, 1000);
        }
        slider.eq(idx).animate({top: '600px'}, 0);
        idx++;
        if(idx == 3) {
            idx = 0;
        }
    }, 3000);

    let notice_btn = $('.notice_btn');
    let gallery_btn = $('.gallery_btn');

    let notice_tbl = $('.notice_tbl');
    let gallery_img = $('.gallery_img');

    gallery_img.hide();

    notice_btn.on('click', function() {
        notice_btn.css('background-color', '#fff');
        gallery_btn.css('background-color', '#ccc');
        notice_tbl.show();
        gallery_img.hide();
    });
    gallery_btn.on('click', function() {
        gallery_btn.css('background-color', '#fff');
        notice_btn.css('background-color', '#ccc');
        notice_tbl.hide();
        gallery_img.show();
    });

    let notice_title = $('#notice_title');
    let popup = $('.popup');
    let popup_btn = $('.popup > button');

    popup.hide();

    notice_title.on('click', function() {
        popup.show();
    });

    popup_btn.on('click', function() {
        popup.hide();
    });
}