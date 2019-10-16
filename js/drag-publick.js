(function () {
    if (Subscribe === undefined) {
        throw new ReferenceError('错误');
    }
    class drag extends Subscribe {
        constructor(ele) {
            super();
            this.ele=ele;
            ['curL','curT']
        }
    };
    window.drag = drag;
})();