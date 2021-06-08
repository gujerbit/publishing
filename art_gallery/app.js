window.onload = function() {
    let main = $('.main > li');

    let sub = $('.sub');
    $(sub).hide();

    $(main).hover(function() {
        $(this).children('.sub').stop().slideDown(600);
    }, function() {
        $(this).children('.sub').stop().slideUp(600);
    });

    let slide = $('.slide-area');
    let idx = 0;

    $(slide).eq(0).css({top: "0"});
    $(slide).eq(1).css({top: "100%"});
    $(slide).eq(2).css({top: "200%"});

    setInterval(function() {
        for(let i = 0; i < 3; i++) {
            let temp = $(slide).eq(i).css('top');
            let top = temp.substring(0, temp.length-2)/3-100;
            $(slide).eq(i).animate({top: `${top}%`}, 1000);
        }
        $(slide).eq(idx).animate({top: "200%"}, 0);
        idx++;
        if(idx === 3) idx = 0;
    }, 3000);

    let popup = $('.popup');
    let trigger = $('.trigger');
    let popupClose = $('.popup > button');

    $(popup).hide();

    $(trigger).on('click', function() {
        $(popup).show();
    });
    $(popupClose).on('click', function() {
        $(popup).hide();
    });
}