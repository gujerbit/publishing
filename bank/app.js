window.onload = function() {
    let sub = $('.sub-menu');

    $(sub).hide();

    let main = $('.main');

    $(main).hover(function() {
        $(this).children('div').stop().slideDown(300);
    }, function() {
        $(this).children('div').stop().slideUp(300);
    });

    let slide = $('.slide-content');
    let idx = 0;

    $(slide).eq(0).css({left: '0'});
    $(slide).eq(1).css({left: '100%'});
    $(slide).eq(2).css({left: '200%'});

    setInterval(function() {
        for(let i = 0; i < 3; i++) {
            let leftProb = $(slide).eq(i).css('left');
            let left = leftProb.substring(0, leftProb.length-2)/12;
            console.log(left);
            $(slide).eq(i).animate({left: `${left-100}%`}, 1000);
        }
        $(slide).eq(idx).animate({left: '200%'}, 0);
        idx++;

        if(idx == 3) idx = 0;
    }, 3000);

    let noticeBtn = $('.noticeBtn');
    let galleryBtn = $('.galleryBtn');
    let notice = $('.notice');
    let gallery = $('.gallery');

    $(gallery).hide();
    $(noticeBtn).css({backgroundColor: '#bbbbbb'});
    $(galleryBtn).css({backgroundColor: '#ffffff'});

    $(noticeBtn).on('click', function() {
        $(noticeBtn).css({backgroundColor: '#bbbbbb'});
        $(galleryBtn).css({backgroundColor: '#ffffff'});
        $(notice).show();
        $(gallery).hide();
    });

    $(galleryBtn).on('click', function() {
        $(noticeBtn).css({backgroundColor: '#ffffff'});
        $(galleryBtn).css({backgroundColor: '#bbbbbb'});
        $(notice).hide();
        $(gallery).show();
    });

    let trigger = $('.trigger');
    let popup = $('.popup');
    let popupBtn = $('.popup button');

    $(popup).hide();

    $(trigger).on('click', function() {
        $(popup).show();
    });

    $(popupBtn).on('click', function() {
        $(popup).hide();
    });
}