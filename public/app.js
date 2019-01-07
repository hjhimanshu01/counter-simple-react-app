"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _react2.default.Component;
var render = _reactDom2.default.render;

// state data for 3 counters

// Counter Component

var Counter = function (_Component) {
  _inherits(Counter, _Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.props.value;

      return _react2.default.createElement(
        "div",
        { className: "counter" },
        _react2.default.createElement(
          "b",
          null,
          value
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                return _this2.props.onDecrement(_this2.props.id);
              } },
            "-"
          ),
          _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                return _this2.props.onIncrement(_this2.props.id);
              } },
            "+"
          )
        )
      );
    }
  }]);

  return Counter;
}(Component);

var App = function (_Component2) {
  _inherits(App, _Component2);

  function App(props, context) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

    _this3.onIncrement = _this3.onIncrement.bind(_this3);
    _this3.onDecrement = _this3.onDecrement.bind(_this3);
    _this3.state = {
      data: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }],
      total: 0
    };
    return _this3;
  }

  _createClass(App, [{
    key: "onIncrement",
    value: function onIncrement(id) {
      var _this4 = this;

      this.state.data.map(function (element) {
        if (element.id === id) {
          element.value = element.value + 1;
          _this4.state.total = _this4.state.total + 1;
          _this4.setState({ element: element });
        }
      });
    }
  }, {
    key: "onDecrement",
    value: function onDecrement(id) {
      var _this5 = this;

      this.state.data.map(function (element) {
        if (element.id === id) {
          element.value = element.value - 1;
          _this5.state.total = _this5.state.total - 1;
          _this5.setState({ element: element });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "COUNTER APP"
        ),
        _react2.default.createElement(
          "h1",
          null,
          "Total:",
          this.state.total
        ),
        this.state.data.map(function (counter) {
          return _react2.default.createElement(Counter, {
            key: counter.id,
            value: counter.value,
            id: counter.id,
            onIncrement: _this6.onIncrement,
            onDecrement: _this6.onDecrement
          });
        })
      );
    }
  }]);

  return App;
}(Component);

render(_react2.default.createElement(App, null), document.getElementById("app"));
