window.onload = function() {
    let main = document.querySelector('.main');
    let sub = main.getElementsByTagName('ul');
    let mainMenu = main.getElementsByTagName('li');

    console.log(mainMenu);

    main.addEventListener('mouseover', function() {
        for(let i = 0; i < 16; i++) {
            if(i % 4 === 0) {
                console.log(i);
                //sub[i / 4].style.display = 'inline';
            }
        }
    });
}