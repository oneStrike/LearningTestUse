$(function () {
    let $mainBox = $('.mainBox'),
        $navBox = null,
        $navList = null;
    axios.get('/checkLogin').then(result => {
        let code = parseFloat(result.code);
        $mainBox.prepend(`
        <nav class="navBox">
            <a href="index.html">首页</a>
            ${code === 0 ? `<a href="javascript:;">登录</a><a href="javascript:;">注册</a>` : `<a href="detail.html"></a><a href="javascript:;">退出</a>`}
        </nav>
        `);
        $navBox = $mainBox.find('.navBox');
        $navList = $navBox.find('a');
        return code;
    }).then(code => {
        if (code === 0) return;
        return axios.get('/getUser');
    }).then(result => {
        if (typeof (result) !== 'undefined') {
            let {
                data: {
                    name
                }
            } = result;
            $navList.eq(1).html(name);
        }
    }).then(() => {
        $navBox.tap((e) => {
            let target = e.target,
                targetValue = target.innerText,
                targetName = target.tagName;
            if (targetName !== 'A') return;
            if (targetValue === '退出') {
                axios.get('/exitLogin');
                window.location.href = window.location.href; //=>页面刷新
                return;
            } else if (targetValue === '登录') {
                window.location.href = `login.html?fromURL=${encodeURIComponent(window.location.href)}`;
                return;
            } else if (targetValue === '注册') {
                window.location.href = `register.html?fromURL=${encodeURIComponent(window.location.href)}`;
                return;
            }
        })
    })
})