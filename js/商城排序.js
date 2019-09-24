let list = document.getElementById('list'),
    headerBox = document.getElementById('head'),
    linkList = headerBox.getElementsByTagName('a'),
    productList = list.getElementsByTagName('li');
(function () {

    let productData = null;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/商城排序.json', false);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            productData = xhr.responseText;
        }
    };
    xhr.send(null);
    //获取的是一个json格式的字符串
    productData = JSON.parse(productData);
    //绑定数据
    let str = ``;
    for (var i = 0; i < productData.length; i++) {
        let {
            title,
            img,
            price
        } = productData[i];
        str += `<li><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span>
        </a></li>`;
    }
    //出入HTML文档中
    list.innerHTML = str;
}())

(function () {

}())