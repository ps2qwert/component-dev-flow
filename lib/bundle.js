'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var _styled = _interopDefault(require('@emotion/styled-base'));
var core = require('@emotion/core');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var bodyRoot = document.querySelector("body");
console.log("test124");

var Portal = /*#__PURE__*/function (_React$Component) {
  _inherits(Portal, _React$Component);

  var _super = _createSuper(Portal);

  function Portal(props) {
    var _this;

    _classCallCheck(this, Portal);

    _this = _super.call(this, props);
    _this.el = document.createElement("div");
    return _this;
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      bodyRoot.appendChild(this.el);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      bodyRoot.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/ReactDOM.createPortal(this.props.children, this.el);
    }
  }]);

  return Portal;
}(React.Component);

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "dcwtdg-StyledButton",
  styles: "background:palevioletred;color:white;;label:StyledButton;"
} : {
  name: "dcwtdg-StyledButton",
  styles: "background:palevioletred;color:white;;label:StyledButton;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQksiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogUGVuZ0thbmdcclxuICogQERhdGU6IDIwMjAtMDktMDggMTA6MzI6MjZcclxuICogQExhc3RFZGl0b3JzOiBQZW5nS2FuZ1xyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA5LTA4IDE1OjQ4OjAzXHJcbiAqIEBGaWxlUGF0aDogXFxyZWFjdC1saWJyYXJ5XFxzcmNcXGNvbXBvbmVudHNcXEJ1dHRvbi5qc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuXHRjb2xvcjogcGFsZXZpb2xldHJlZDtcclxuXHRtYXJnaW46IDAuNWVtIDFlbTtcclxuXHRwYWRkaW5nOiAwLjI1ZW0gMWVtO1xyXG5cclxuXHQkeyhwcm9wcykgPT5cclxuXHRcdHByb3BzLnByaW1hcnkgJiZcclxuXHRcdGNzc2BcclxuXHRcdFx0YmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0YH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8U3R5bGVkQnV0dG9uIHByaW1hcnk+VGhpcyBteSBidXR0b24gY29tcG9uZW50PC9TdHlsZWRCdXR0b24+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjc3M9e2Nzc2BcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuXHRcdFx0XHRcdGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwLjVlbSAxZW07XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjI1ZW0gMWVtO1xyXG5cdFx0XHRcdGB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHRQcmltYXJ5IEJ1dHRvblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var StyledButton = _styled("button", {
  target: "eqk5c5z0",
  label: "StyledButton"
})("background:transparent;border-radius:3px;border:2px solid palevioletred;color:palevioletred;margin:0.5em 1em;padding:0.25em 1em;", function (props) {
  return props.primary && _ref;
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0MiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogUGVuZ0thbmdcclxuICogQERhdGU6IDIwMjAtMDktMDggMTA6MzI6MjZcclxuICogQExhc3RFZGl0b3JzOiBQZW5nS2FuZ1xyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA5LTA4IDE1OjQ4OjAzXHJcbiAqIEBGaWxlUGF0aDogXFxyZWFjdC1saWJyYXJ5XFxzcmNcXGNvbXBvbmVudHNcXEJ1dHRvbi5qc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuXHRjb2xvcjogcGFsZXZpb2xldHJlZDtcclxuXHRtYXJnaW46IDAuNWVtIDFlbTtcclxuXHRwYWRkaW5nOiAwLjI1ZW0gMWVtO1xyXG5cclxuXHQkeyhwcm9wcykgPT5cclxuXHRcdHByb3BzLnByaW1hcnkgJiZcclxuXHRcdGNzc2BcclxuXHRcdFx0YmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0YH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8U3R5bGVkQnV0dG9uIHByaW1hcnk+VGhpcyBteSBidXR0b24gY29tcG9uZW50PC9TdHlsZWRCdXR0b24+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjc3M9e2Nzc2BcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuXHRcdFx0XHRcdGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwLjVlbSAxZW07XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjI1ZW0gMWVtO1xyXG5cdFx0XHRcdGB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHRQcmltYXJ5IEJ1dHRvblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdfQ== */");

var Container = _styled("div", {
  target: "eqk5c5z1",
  label: "Container"
})(process.env.NODE_ENV === "production" ? {
  name: "xi606m",
  styles: "text-align:center;"
} : {
  name: "xi606m",
  styles: "text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IFBlbmdLYW5nXHJcbiAqIEBEYXRlOiAyMDIwLTA5LTA4IDEwOjMyOjI2XHJcbiAqIEBMYXN0RWRpdG9yczogUGVuZ0thbmdcclxuICogQExhc3RFZGl0VGltZTogMjAyMC0wOS0wOCAxNTo0ODowM1xyXG4gKiBARmlsZVBhdGg6IFxccmVhY3QtbGlicmFyeVxcc3JjXFxjb21wb25lbnRzXFxCdXR0b24uanNcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XHJcblx0Y29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcblx0bWFyZ2luOiAwLjVlbSAxZW07XHJcblx0cGFkZGluZzogMC4yNWVtIDFlbTtcclxuXHJcblx0JHsocHJvcHMpID0+XHJcblx0XHRwcm9wcy5wcmltYXJ5ICYmXHJcblx0XHRjc3NgXHJcblx0XHRcdGJhY2tncm91bmQ6IHBhbGV2aW9sZXRyZWQ7XHJcblx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdGB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PFN0eWxlZEJ1dHRvbiBwcmltYXJ5PlRoaXMgbXkgYnV0dG9uIGNvbXBvbmVudDwvU3R5bGVkQnV0dG9uPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y3NzPXtjc3NgXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XHJcblx0XHRcdFx0XHRjb2xvcjogcGFsZXZpb2xldHJlZDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMC41ZW0gMWVtO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMC4yNWVtIDFlbTtcclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0UHJpbWFyeSBCdXR0b25cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1bucuw4-Button",
  styles: "background:transparent;border-radius:3px;border:2px solid palevioletred;color:palevioletred;margin:0.5em 1em;padding:0.25em 1em;;label:Button;"
} : {
  name: "1bucuw4-Button",
  styles: "background:transparent;border-radius:3px;border:2px solid palevioletred;color:palevioletred;margin:0.5em 1em;padding:0.25em 1em;;label:Button;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ1kiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQEF1dGhvcjogUGVuZ0thbmdcclxuICogQERhdGU6IDIwMjAtMDktMDggMTA6MzI6MjZcclxuICogQExhc3RFZGl0b3JzOiBQZW5nS2FuZ1xyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA5LTA4IDE1OjQ4OjAzXHJcbiAqIEBGaWxlUGF0aDogXFxyZWFjdC1saWJyYXJ5XFxzcmNcXGNvbXBvbmVudHNcXEJ1dHRvbi5qc1xyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuXHRjb2xvcjogcGFsZXZpb2xldHJlZDtcclxuXHRtYXJnaW46IDAuNWVtIDFlbTtcclxuXHRwYWRkaW5nOiAwLjI1ZW0gMWVtO1xyXG5cclxuXHQkeyhwcm9wcykgPT5cclxuXHRcdHByb3BzLnByaW1hcnkgJiZcclxuXHRcdGNzc2BcclxuXHRcdFx0YmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0YH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8U3R5bGVkQnV0dG9uIHByaW1hcnk+VGhpcyBteSBidXR0b24gY29tcG9uZW50PC9TdHlsZWRCdXR0b24+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjc3M9e2Nzc2BcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuXHRcdFx0XHRcdGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwLjVlbSAxZW07XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjI1ZW0gMWVtO1xyXG5cdFx0XHRcdGB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHRQcmltYXJ5IEJ1dHRvblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Button = function Button() {
  return core.jsx("div", null, core.jsx(StyledButton, {
    primary: true
  }, "This my button component"), core.jsx("div", {
    css: _ref2
  }, "Primary Button"));
};

exports.Button = Button;
exports.Portal = Portal;
