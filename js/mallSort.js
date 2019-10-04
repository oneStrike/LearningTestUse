$(function () {
    let productData = (function () {
        let showData = null,
            $showBox = $('.list'),
            $clickTag = $('.header > a');
        //=>获取数据
        $.ajax({
            url: '../json/mallSOrt.json',
            method: 'GET',
            async: false,
            dataType: 'json',
            success: function (result) {
                showData = result;
            }
        });
        //绑定数据;
        let bindData = function () {
            for (var i = 0; i < showData.length; i++) {
                let {
                    title,
                    hot,
                    price,
                    img,
                    time
                } = showData[i];
                $(`<li data-time="${time}" data-price="${price}" data-hot="${hot}">
                <a href="javascript:;">
                    <img src="${img}" alt="">
                    <p>${title}</p>
                    <span>￥${price}</span>
                    <span>日期：￥${time}</span>
                    <span>热度${hot}</span>
                </a>
            </li>`).appendTo($showBox);
            }
        };
        //绑定点击事件
        let bindClick = function () {
            let $liList = $('.list li');
            let arr = ['data-time', 'data-price', 'data-hot'];
            $clickTag.each(function (index, item) {
                item.flag = -1;
                $(item).click(function () {
                    for (var i = 0; i < $clickTag.length; i++) {
                        if (this !== $clickTag[i]) {
                            $clickTag[i].flag = -1;
                        }
                    }
                    item.flag *= -1;
                    $liList.sort(function (firstItem, lastItem) {
                        firstItem = firstItem.getAttribute(arr[index]);
                        lastItem = lastItem.getAttribute(arr[index]);
                        if (index == 0) {
                            firstItem = firstItem.replace(/-/g, '');
                            lastItem = lastItem.replace(/-/g, '');
                        };
                        return (firstItem - lastItem) * item.flag;
                    }).appendTo($showBox);
                });
            });
        }
        //高级单例模式，返回函数
        return {
            init: function () {
                bindData();
                bindClick();
            }
        }
    })();
    productData.init();
})