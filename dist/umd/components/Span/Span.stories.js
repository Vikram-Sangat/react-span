(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "react", "@storybook/react", "."], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("react"), require("@storybook/react"), require("."));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.react, global.react, global._);
    global.undefined = mod.exports;
  }
})(this, function (module, _react, _react2, _) {
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

  (0, _react2.storiesOf)('Span', module).add('Default', () => /*#__PURE__*/React.createElement(_.Span, {
    fontSize: 3
  }, "I am text"));
});
//# sourceMappingURL=Span.stories.js.map