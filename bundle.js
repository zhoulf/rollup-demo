(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.myLib = factory());
}(this, (function () { 'use strict';

  // src/foo.js

  function toJson(data) {
    return Object.values(data);
  }

  var word = 'hello world!';

  // async function asyncPrint(value, ms) {
  //   await timeout(ms);
  //   console.log(value);
  // }

  // export function axio(value, ms) {
  // 	asyncPrint(value, ms);
  // }

  // src/main.js
  var main = (function () {
    var data = { info: word };
    return {
      toJson: function toJson$$1() {
        return toJson(data);
      }
    };
  });

  return main;

})));
//# sourceMappingURL=bundle.js.map
