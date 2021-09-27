(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "react", "@storybook/react", ".", "../Span"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("react"), require("@storybook/react"), require("."), require("../Span"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.react, global.react, global._, global.Span);
    global.undefined = mod.exports;
  }
})(this, function (module, _react, _react2, _, _Span) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  (0, _react2.storiesOf)('Theme', module).add('Default', () => /*#__PURE__*/React.createElement(_.Theme, null, /*#__PURE__*/React.createElement(_Span.Span, {
    color: "navy"
  }, "I am text")));
});
//# sourceMappingURL=Theme.stories.js.map