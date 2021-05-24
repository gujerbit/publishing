window.onload = function() {
    let main = $('.main');
    $(main).children('div').hide();

    $(main).hover(function() {
        $(main).children('div').stop().slideDown(300);
    }, function() {
        $(main).children('div').stop().slideUp(300);
    });

    let slider = $('.slider');
    let slide = $(slider).children();
    let idx = 0;

    slide.eq(0).css({top: '0%'});
    slide.eq(1).css({top: '100%'});
    slide.eq(2).css({top: '200%'});

    setInterval(function() {
        for(let i = 0; i <3; i++) {
            let temp = slide.eq(i).css('top');
            let value = temp.substring(0, temp.length-2)/3;
            slide.eq(i).animate({top: `${value-100}%`}, 1000);
        }
        
        slide.eq(idx).animate({top: '200%'}, 0);
        idx++;

        if(idx === 3) idx = 0;
    }, 3000);

    let popup = $('.popup');
    $(popup).hide();

    let trigger = $('.trigger');

    $(trigger).on('click', function() {
        $(popup).show();
    });

    let btn = $('.popup button');

    $(btn).on('click', function() {
        $(popup).hide();
    });
}