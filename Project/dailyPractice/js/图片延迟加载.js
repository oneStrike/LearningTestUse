(function () {
    let random = function () {
            return Math.floor(Math.random() * 4 + 1);
        },
        imgList = null;
    let createElement = function () {
        let str = ``,
            body = document.body;
        for (let i = 0; i < 100; i++) {
            str += `<div class="container">
                    <img data-src="../images/${random()}.png" src="" alt="">
                </div>`;
        }
        body.innerHTML = str;
        imgList = document.getElementsByTagName('img');
    };
    createElement();
    let loadImg = function (img) {
        let tempImg = new Image(),
            trueSrc = img.getAttribute('data-src');
        tempImg.onload = function () {
            img.src = trueSrc;
            tempImg = null;
        };
        tempImg.src = trueSrc;
    }
    for (let i = 0, len = imgList.length; i < len; i++) {
        loadImg(imgList[i]);
    }
}());