(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Span", "./LoadFont", "./Theme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Span"), require("./LoadFont"), require("./Theme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Span, global.LoadFont, global.Theme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Span, _LoadFont, _Theme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Span).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Span[key];
      }
    });
  });
  Object.keys(_LoadFont).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _LoadFont[key];
      }
    });
  });
  Object.keys(_Theme).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Theme[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map