window.onload = function() {
    let main = document.querySelector('.main');
    let sub = main.getElementsByTagName('ul');
    let mainMenu = main.getElementsByTagName('li');

    console.log(mainMenu);

    for(let i = 0; i < 16; i++) {
        if(i % 4 == 0) {
            mainMenu[i].addEventListener('mouseover', function() {
                sub[i / 4].style.display = 'inline';
            });
            mainMenu[i].addEventListener('mouseout', function() {
                sub[i / 4].style.display = 'none';
            });
            sub[i / 4].addEventListener('mouseover', function() {
                sub[i / 4].style.display = 'inline';
            });
            sub[i / 4].addEventListener('mouseout', function() {
                sub[i / 4].style.display = 'none';
            });
        }
    }
}