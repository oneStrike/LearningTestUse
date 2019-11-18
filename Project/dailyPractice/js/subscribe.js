(function () {
    class Subscribe {
        constructor() {
            this.pond = [];
        };
        add(fn) {
            let isFind = false;
            this.pond.forEach(item => item === fn ? isFind = true : null);
            !isFind ? this.pond.push(fn) : null;
        };
        remove(fn) {
            this.pond.forEach((item, index) => {
                item === fn ? this.pond[index] = null : null;
            })
        };
        fire(...arr) {
            for (let i = 0, len = this.pond.length; i < len; i++) {
                if (this.pond[i] === null) {
                    this.pond.splice(i, 1);
                    continue;
                };
                this.pond[i](...arr);
            }
        }
    }
    window.Subscribe = Subscribe;
})();