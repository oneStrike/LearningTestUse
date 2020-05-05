(function () {
  function Promise(executor) {
    function resolve(value) {}

    function reject(reason) {}

    executor(resolve, reject);
  }

  Promise.prototype.then = function (onResolved, onRejected) {};

  Promise.prototype.catch = function (onRejected) {};

  Promise.resolve = function (value) {};

  Promise.reject = function (reason) {};

  Promise.all = function (promiseArr) {};

  Promise.race = function (promiseArr) {};

  window.Promise = Promise;
})();
