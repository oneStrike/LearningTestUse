let matchRender = (function ($) {
    let $userList = $('.userList'),
        $wrapper = $userList.find('ul'),
        $tip = $userList.find('.tip');

    let limit = 10,
        page = 1,
        pageNum = 1,
        togle = 10,
        isRun = false,
        search = '';

    // 基于axios发送请求获取数据
    let queryData = function queryData() {
        axios.get('/getMatchList', {
            params: {
                limit,
                page,
                search
            }
        }).then(result => {
            pageNum = result['pageNum'];
            togle = result['togle'];
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
                </div>
            </li>`);
        });
        $wrapper.append($frag);
        $frag = null;
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
    };

    return {
        init: function () {
            queryData();
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
        },
    }
})(Zepto);
matchRender.init();