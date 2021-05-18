window.onload = () => {
    let main = $('.main > li');

    $(main).hover(function() {
        $(this).children('.sub').stop().slideDown(300);
    }, function() {
        $(this).children('.sub').stop().slideUp(300);
    });

    let slide = $('.slide-img');
    let idx = 0;

    slide.eq(1).hide();
    slide.eq(2).hide();

    setInterval(function() {
        if(idx !== 2) {
            slide.eq(idx).fadeOut(1000);
            slide.eq(idx+1).fadeIn(1000);
            idx++;
        } else {
            slide.eq(idx).fadeOut(1000);
            idx = 0;
            slide.eq(idx).fadeIn(1000);
        }
    }, 3000);

    let trigger = $('.popup-trigger');
    let popup = $('.popup');
    let popupBtn = $('.popup > button');
    
    popup.hide();

    $(trigger).on('click', function() {
        popup.show();
    });

    $(popupBtn).on('click', function() {
        popup.hide();
    });
}