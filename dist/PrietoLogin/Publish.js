"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default(props) {
  var close = function close() {
    var newVal = _objectSpread({}, props.userPack.loginModal);

    newVal.active = false;
    props.userPack.switchLoginModal(newVal);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.userPack.dimensions.width < 760 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal alignCenter justify"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalLoginCardMobile alignCenter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upperCard justify"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "closeIcon",
    onClick: close
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.5 1.6375L12.3625 0.5L7 5.8625L1.6375 0.5L0.5 1.6375L5.8625 7L0.5 12.3625L1.6375 13.5L7 8.1375L12.3625 13.5L13.5 12.3625L8.1375 7L13.5 1.6375Z",
    fill: "#1F1F1F"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "secondTitle"
  }, "Crear publicaci\xF3n")), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "CSS Material Input Field"), /*#__PURE__*/_react.default.createElement("fieldset", {
    class: "material"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "John Doe",
    autocomplete: "off",
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", null, "First Name")))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal alignCenter justify"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalLoginCard alignCenter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upperCard justify"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "closeIcon",
    onClick: close
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.5 1.6375L12.3625 0.5L7 5.8625L1.6375 0.5L0.5 1.6375L5.8625 7L0.5 12.3625L1.6375 13.5L7 8.1375L12.3625 13.5L13.5 12.3625L8.1375 7L13.5 1.6375Z",
    fill: "#1F1F1F"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "secondTitle"
  }, "Crear publicaci\xF3n")), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "CSS Material Input Field"), /*#__PURE__*/_react.default.createElement("fieldset", {
    class: "material"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "John Doe",
    autocomplete: "off",
    required: true
  }), /*#__PURE__*/_react.default.createElement("label", null, "First Name")))))));
}