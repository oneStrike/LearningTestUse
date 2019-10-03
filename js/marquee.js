let ul = document.getElementsByTagName('ul')[0],
    btn = document.querySelector('button'),
    ulLeft = myPublic.css(ul, 'left');
ul.innerHTML += ul.innerHTML;
myPublic.css(ul, 'width', (myPublic.css(ul, 'width') * 2) + 'px')
btn.addEventListener('click', function () {
    setInterval(() => {
        ulLeft -= 5;
        myPublic.css(ul, 'left', ulLeft + 'px')
        if (Math.abs(ulLeft) === myPublic.css(ul, 'width') / 2) {
            ulLeft = 0;
        }
    }, 16);
});