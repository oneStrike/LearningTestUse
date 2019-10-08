$(function () {
    let productData = null,
        $linkList = $('.header').find('a'),
        liList = document.getElementsByTagName("li"),
        $ulBox = $('.list'),
        arr = ['data-time', 'data-price', 'data-hot'];
    ~function () {
        $.ajax({
            url: '../json/mallSort.json',
            method: 'GET',
            dataType: 'json',
            async: false,
            success: function (result) {
                productData = result;
            }
        })
    }();
    let setData = function () {
        let str = ``;
        $(productData).each((index, item) => {
            let {
                title,
                price,
                hot,
                time,
                img
            } = item;
            str += `<li data-time="${time}" data-price="${price}" data-hot="${hot}">
                      <a href="javascript:;">
                         <img src="${img}" alt="">
                         <p>${title}</p>
                         <span>￥${price}</span><br>
                         <span>日期:${time}</span><br>
                         <span>热度:${hot}</span>
                     </a>
                    </li>`;
        });
        $ulBox.append(str);
    }
    setData();

    let setClick = function () {
        liList = Array.from(liList);
        $linkList.each((index, item) => {
            item.flag = -1;
            $(item).on('click', function () {
                item.flag *= -1;
                liList = liList.sort((a, b) => {
                    a = a.getAttribute(arr[index]);
                    b = b.getAttribute(arr[index]);
                    if (index == 0) {
                        a = a.replace(/-/g, '');
                        b = b.replace(/-/g, '');
                    }
                    return ((a - b) * item.flag);
                });
                console.log(liList)
                $ulBox.append(liList)
            })
        })
    };
    setClick()
});