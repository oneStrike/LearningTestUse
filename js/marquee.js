(function () {
    let box = document.getElementsByClassName('box')[0],
        ulBox = document.getElementsByClassName('ulBox')[0],
        btn = document.getElementsByClassName('btn')[0],
        ulStyle = getComputedStyle(ulBox),
        left = parseFloat(ulStyle.left);
    btn.onclick = () => {
        ulBox.innerHTML += ulBox.innerHTML;
        ulBox.style.width = parseFloat(ulStyle.width) * 2 + 'px';
        setInterval(function () {
            ulBox.style.left = left-- + 'px';
            if (Math.abs(left) == parseFloat(ulStyle.width) / 2) {
                left = 0;
                ulBox.style.left = '0px';
            }
        }, (10))
    }
}())