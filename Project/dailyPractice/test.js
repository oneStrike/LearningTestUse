(function () {
  const PENDING = "pending";
  const RESOLVED = "resolved";
  const REJECTED = "rejected";
  function Promise(executor) {
    const self = this;
    self.data = null;
    self.status = PENDING;
    self.callbacks = [];
    function resolve(value) {
      if (self.status !== PENDING) return;
      self.data = value;
      self.status = RESOLVED;
      setTimeout(function () {
        self.callbacks.forEach(function (callback) {
          callback.onResolved(self.data);
        });
      });
    }

    function reject(reason) {
      if (self.status !== PENDING) return;
      self.data = reason;
      self.status = REJECTED;
      setTimeout(function (callback) {
        self.callbacks.forEach(function (callback) {
          callback.onRejected(self.data);
        });
      });
    }

    executor(resolve, reject);
  }

  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this;
    onResolved =
      typeof onResolved === "function" ? onResolved : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    return new Promise(function (resolve, reject) {
      function handle(callback) {
        try {
          let result = callback(self.data);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      }

      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved: function () {
            handle(onResolved);
          },
          onRejected: function () {
            handle(onRejected);
          },
        });
      } else if (self.status === RESOLVED) {
        handle(onResolved);
      } else if (self.status === REJECTED) {
        handle(onRejected);
      }
    });
  };

  Promise.prototype.catch = function (onRejected) {
    return new Promise(function (resolve, reject) {
      Promise.prototype.then(null, onRejected);
    });
  };

  Promise.resolve = function (value) {
    return new Promise(function (resolve, reject) {
      if (value instanceof Promise) {
        value.then(
          (val) => resolve(val),
          (reason) => reject(reason)
        );
      } else {
        resolve(value);
      }
    });
  };

  Promise.reject = function (reason) {
    return new Promise(function (resolve, reject) {
      reject(reason);
    });
  };

  Promise.all = function (promiseArr) {
    return new Promise(function (resolve, reject) {
      let conut = 0;
      let values = [];
      promiseArr.forEach(function (promise, index) {
        if (promise instanceof Promise) {
          promise.then(
            (value) => {
              count++;
              values[index] = value;
              if (count === promiseArr.length) {
                resolve(values);
              }
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          values[index] = promise;
        }
      });
    });
  };

  Promise.race = function (promiseArr) {};

  window.Promise = Promise;
})();
