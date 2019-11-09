let matchRender = (function ($) {
    let $userList = $('.userList'),
        $wrapper = $userList.find('ul'),
        $tip = $userList.find('.tip');

    let limit = 10,
        page = 1,
<<<<<<< HEAD
        pageNum = 1,
        togle = 10,
        isRun = false,
=======
>>>>>>> 1aa0060ee7f3c80b41b95966ae24de76afa1b5c9
        search = '';

    // 基于axios发送请求获取数据
    let queryData = function queryData() {
<<<<<<< HEAD
        axios.get('/getMatchList', {
=======
        axios.get('http://localhost:8080/getMatchList', {
>>>>>>> 1aa0060ee7f3c80b41b95966ae24de76afa1b5c9
            params: {
                limit,
                page,
                search
            }
        }).then(result => {
<<<<<<< HEAD
            pageNum = result['pageNum'];
            togle = result['togle'];
=======
>>>>>>> 1aa0060ee7f3c80b41b95966ae24de76afa1b5c9
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
<<<<<<< HEAD
            let {
                id,
                name,
                picture,
                sex,
                matchId,
                slogan,
                voteNum,
                isVote
            } = item;
            $frag.append(`<li>
                <a href="detail.html?userId=${id}">
                    <img src="${picture}" alt="${name}" class="picture">
                    <p class="title">
                        <span>${name}</span>
                        |
                        <span>编号 #${matchId}</span>
                    </p>
                    <p class="slogan">${slogan}</p>
                </a>
                <div class="vote">
                    <span class="voteNum">${voteNum}</span>
                    ${parseFloat(isVote)===0?`<a href="javascript:;" class="voteBtn">投他一票</a>`:``}
=======
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
>>>>>>> 1aa0060ee7f3c80b41b95966ae24de76afa1b5c9
                </div>
            </li>`);
        });
        $wrapper.append($frag);
        $frag = null;
<<<<<<< HEAD
        isRun = false;
    };

    //设置搜索
    let $searchBtn = $('.searchBtn');
    let searchStart = function () {
        isRun = false;
        if (isRun) {
            return;
        };
        isRun = true;
        search = $searchBtn.prev('input').val().trim();
        page = 1;
        $wrapper.html('');
        queryData();
    }

    let emptyData = function () {
        let $empty = $('.empty');
        $empty.css('display', 'block');
        $empty.timer = setTimeout(() => {
            $empty.css('display', 'none');
            clearTimeout($empty.timer);
        }, 3000);
=======
>>>>>>> 1aa0060ee7f3c80b41b95966ae24de76afa1b5c9
    };

    return {
        init: function () {
            queryData();
<<<<<<< HEAD
            $(window).on('scroll', () => {
                let {
                    clientHeight,
                    scrollTop,
                    scrollHeight
                } = document.documentElement;
                if (clientHeight + scrollTop + 200 >= scrollHeight) {
                    if (isRun) {
                        return;
                    };
                    isRun = true;
                    if (page == pageNum) {
                        emptyData()
                        return;
                    }
                    page++;
                    queryData();
                }
            });
            $searchBtn.tap(searchStart);
=======
>>>>>>> 1aa0060ee7f3c80b41b95966ae24de76afa1b5c9
        },
    }
})(Zepto);
matchRender.init();