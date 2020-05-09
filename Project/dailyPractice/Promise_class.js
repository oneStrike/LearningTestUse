(function () {
  const PENDING = "pending";
  const RESOLVED = "resolved";
  const REJECTED = "rejected";

  class Promise {
    constructor(executor) {
      const self = this;
      self.status = PENDING;
      self.data = null;
      self.callbacks = [];

      function resolve(value) {
        if (self.status !== PENDING) return;
        self.status = RESOLVED;
        self.data = value;
        setTimeout(function () {
          self.callbacks.forEach(function (callback) {
            callback.onReseolved(self.data);
          });
        });
      }

      function reject(reason) {
        if (self.status !== PNEDING) return;
        self.status = REJECTED;
        self.data = reason;
        self.callbacks.forEach(function (callback) {
          callback.onRejected(self.data);
        });
      }

      executor(resolve, reject);
    }

    then(onReseolved, onRejected) {
      const self = this;
      onReseolved =
        typeof onReseolved === "function" ? onReseolved : (value) => value;
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
          } catch (error) {
            reject(error);
          }
        }

        if (self.status === RESOLVED) {
          handle(onReseolved);
        } else if (self.status === REJECTED) {
          handle(onRejected);
        } else
          self.callbacks.push({
            onResolved: function () {
              handle(onResolved);
            },
            onRejected: function () {
              handel(onRejected);
            },
          });
      });
    }

    catch(onRejected) {
      return new Promise(function (resolve, reject) {
        this.then(undefined, onRejected);
      });
    }

    static resolve(value) {
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
    }

    static reject(reason) {
      return new Promise(function (resolve, reject) {
        reject(reason);
      });
    }

    static all(promiseArr) {
      return new Promise(function (resolve, reject) {
        let values = [];
        let count = 0;
        promiseArr.forEach(function (item, index) {
          item.then(
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
        });
      });
    }

    static race(promiesArr) {
      return new Promise(function (resolve, reject) {
        promiseArr.forEach(function (item) {
          item.then(
            (value) => resolve(value),
            (reason) => reject(reason)
          );
        });
      });
    }
  }

  window.Promise = Promise;
})();
