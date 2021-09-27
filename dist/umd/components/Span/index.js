(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "styled-components", "styled-system"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("styled-components"), require("styled-system"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.styledSystem);
    global.undefined = mod.exports;
  }
})(this, function (exports, _styledComponents, _styledSystem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Span = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Span = exports.Span = (0, _styledComponents2.default)('span')((0, _styledSystem.compose)(_styledSystem.background, _styledSystem.border, _styledSystem.color, _styledSystem.zIndex, _styledSystem.flexbox, _styledSystem.layout, _styledSystem.position, _styledSystem.shadow, _styledSystem.space, _styledSystem.typography));
  exports.default = Span;
});
//# sourceMappingURL=index.js.map