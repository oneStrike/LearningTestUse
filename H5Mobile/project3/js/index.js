let matchRender = (function ($) {
    let $userList = $('.userList'),
        $wrapper = $userList.find('ul'),
        $tip = $userList.find('.tip');

    let limit = 10,
        page = 1,
        search = '';

    // 基于axios发送请求获取数据
    let queryData = function queryData() {
        axios.get('http://localhost:8080/getMatchList', {
            params: {
                limit,
                page,
                search
            }
        }).then(result => {
            return result;
        }).then(bindHTML);
    };


    // 绑定数据
    let bindHTML = function (result) {
        let {
            code,
            list = []
        } = result;
        //获取数据失败,隐藏列表
        if (parseFloat(code) !== 0) {
            // 服务器返回的数据不匹配,非服务器状态码错误
            $wrapper.css('display', 'none');
            $tip.css('display', 'block');
            return;
        };
        //获取数据成功,显示列表
        $wrapper.css('display', 'block');
        $tip.css('display', 'none');
        let $frag = $(document.createDocumentFragment());
        list.forEach((item, index) => {
            $frag.append(`<li>
                <a href="detail.html?userId=0">
                    <img src="img/man.png" alt="" class="picture">
                    <p class="title">
                        <span>canfoo</span>
                        |
                        <span>编号 #001</span>
                    </p>
                    <p class="slogan">同一个世界同一个梦想同一个世界同一个梦想</p>
                </a>
                <div class="vote">
                    <span class="voteNum">7</span>
                    <a href="javascript:;" class="voteBtn">投他一票</a>
                </div>
            </li>`);
        });
        $wrapper.append($frag);
        $frag = null;
    };

    return {
        init: function () {
            queryData();
        },
    }
})(Zepto);
matchRender.init();