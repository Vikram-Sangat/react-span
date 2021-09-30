(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "webfontloader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("webfontloader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.webfontloader);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _webfontloader) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LoadFont = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _webfontloader2 = _interopRequireDefault(_webfontloader);

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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const LoadFont = exports.LoadFont = ({
    config,
    children
  }) => {
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        _webfontloader2.default.load(config);
      }
    }, [config]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  };

  LoadFont.propTypes = {
    children: _propTypes2.default.node.isRequired
  };
  exports.default = LoadFont;
});
//# sourceMappingURL=index.js.map