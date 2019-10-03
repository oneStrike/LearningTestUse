$(function () {
    let imgData = null,
        page = 0;
    //获取数据
    let queryData = function () {
        page++;
        $.ajax({
            url: '../json/data.json?page=${page}',
            method: 'GET',
            async: false,
            dataType: 'json',
            success: function (result) {
                imgData = result;
            }
        });
    };
    queryData();

    //绑定数据

    //=>获取到ul下的三个li
    let $listBox = $('.flowBox>li').get();

    //=>创建li内需要展示的元素
    let queryHTML = function (obj = {}) {

        let {
            id,
            title,
            link,
            pic
        } = obj;
        if (typeof (id) === 'undefined') {
            return '';
        }
        return `<a href="${link}">
                     <div><img src="${pic}" alt=""></div>
                     <span>${title}</span>
                 </a>`;
    };

    //=>循环json数据，获取需要展示的图片
    for (let i = 0; i < imgData.length; i += 3) {
        //=>将获取到的数据分组，三个一组
        let item1 = imgData[i],
            item2 = imgData[i + 1],
            item3 = imgData[i + 2];

        //=>对比每个li的高度，依次将获取到的元素插入
        $listBox.sort(function (a, b) {
            return a.offsetHeight - b.offsetHeight;
        });

        //=>插入创建的元素
        $listBox.forEach(function (item, index) {
            item.innerHTML += queryHTML(eval('item' + (index + 1)))
        })

    }

})