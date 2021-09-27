"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Span = require("./Span");

Object.keys(_Span).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Span[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Span[key];
    }
  });
});

var _LoadFont = require("./LoadFont");

Object.keys(_LoadFont).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LoadFont[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LoadFont[key];
    }
  });
});

var _Theme = require("./Theme");

Object.keys(_Theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Theme[key];
    }
  });
});
//# sourceMappingURL=index.js.map