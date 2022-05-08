"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PrietoLogin;

require("./media/css/styles.css");

var _react = _interopRequireDefault(require("react"));

var _LoginElements = _interopRequireDefault(require("./LoginElements"));

var _RegisterElements = _interopRequireDefault(require("./RegisterElements"));

var _Publish = _interopRequireDefault(require("./Publish"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PrietoLogin(props) {
  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      step = _React$useState2[0],
      stepper = _React$useState2[1];

  var _React$useState3 = _react.default.useState({
    innerLoading: false,
    innerError: "",
    username: "",
    password: "",
    active: true,
    login: true
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      modalData = _React$useState4[0],
      setmodalData = _React$useState4[1];

  var _React$useState5 = _react.default.useState(""),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      publishSwitch = _React$useState6[0],
      setpublishSwitch = _React$useState6[1];

  var modalObject = {
    data: modalData,
    setMethod: setmodalData
  };

  try {
    props.userPack.loginModal.login;
  } catch (error) {//
  }

  var nextStep = function nextStep(e) {
    e.preventDefault();
    stepper(function (prev) {
      return prev + 1;
    });
  };

  var prevStep = function prevStep(e) {
    e.preventDefault();
    stepper(function (prev) {
      return prev - 1;
    });
  };

  var updateUsername = function updateUsername(e) {
    var newVal = _objectSpread({}, modalData);

    setmodalData(newVal);
    newVal.username = e.target.value;
    props.userPack.switchLoginModal(newVal);
  };

  var updatePassword = function updatePassword(e) {
    var newVal = _objectSpread({}, modalData);

    setmodalData(newVal);
    newVal.password = e.target.value;
    props.userPack.switchLoginModal(newVal);
  };

  var close = function close() {
    var newVal = _objectSpread({}, modalData);

    newVal.active = false;
    setmodalData(newVal);
  };

  var openLogin = function openLogin() {
    var newVal = _objectSpread({}, modalData);

    newVal.active = true;
    newVal.login = true;
    setmodalData(newVal);
  };

  var openRegister = function openRegister() {
    var newVal = _objectSpread({}, modalData);

    newVal.active = true;
    newVal.login = false; //!newVal.login

    setmodalData(newVal);
  }; //props.userPack.loginModal.type


  switch (publishSwitch) {
    case "publish":
      return /*#__PURE__*/_react.default.createElement(_Publish.default, {
        userPack: props.userPack
      });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal alignCenter justify"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalLoginCard"
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
  }, " ", modalData.login ? "Inicia sesión" : "Regístrate")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    },
    className: "alignCenter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "centerCard"
  }, modalData.login ? /*#__PURE__*/_react.default.createElement(_LoginElements.default, {
    modalObject: modalObject,
    userPack: props.userPack
  }) : /*#__PURE__*/_react.default.createElement(_RegisterElements.default, {
    modalObject: modalObject,
    userPack: props.userPack
  })))));
}