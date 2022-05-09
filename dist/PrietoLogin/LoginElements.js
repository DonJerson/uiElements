"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _reactGoogleLogin = _interopRequireDefault(require("react-google-login"));

var _facebookLoginRenderProps = _interopRequireDefault(require("react-facebook-login/dist/facebook-login-render-props"));

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

function _default(props) {
  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      step = _React$useState2[0],
      stepper = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

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
    var newVal = _objectSpread({}, props.modalObject.data);

    newVal.username = e.target.value;
    props.modalObject.setMethod(newVal);
  };

  var updatePassword = function updatePassword(e) {
    var newVal = _objectSpread({}, props.modalObject.data);

    newVal.password = e.target.value;
    props.modalObject.setMethod(newVal);
  };

  var login = function login(e) {
    props.userPack.methods.login(props.modalObject.data.username, props.modalObject.data.password);
  };

  var close = function close() {
    var newVal = _objectSpread({}, props.modalObject.data);

    newVal.active = false;
    props.modalObject.setMethod(newVal);
  };

  var openRegister = function openRegister() {
    var newVal = _objectSpread({}, props.modalObject.data);

    if (window.location.href.includes("loginMobile")) {
      newVal.login = true;
      props.modalObject.setMethod(newVal);
    } else {
      newVal.active = true;
      newVal.login = false;
      props.modalObject.setMethod(newVal);
    }
  };

  var responseGoogle = function responseGoogle(e) {
    console.log("qloq", e.profileObj);
    var data = e.profileObj;

    var newVal = _objectSpread({}, props.modalObject.data);

    newVal.username = data.email;
    newVal.password = "Default3xsd1Pass";
    newVal.social = true;
    props.modalObject.setMethod(newVal);
    props.userPack.methods.handleRegister(data);
  };

  var responseFacebook = function responseFacebook(e) {
    //e.preventDefault()
    console.log("still here", e);

    if (e.status !== "unknown") {
      var newVal = _objectSpread({}, props.modalObject.data);

      newVal.username = e.email;
      newVal.password = "Default3xsd1Pass";
      newVal.social = true;
      props.modalObject.setMethod(newVal);
      props.userPack.methods.handleRegister(_objectSpread({}, e));
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.modalObject.data.innerLoading ? /*#__PURE__*/_react.default.createElement(_Loader.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.modalObject.data.innerError ? /*#__PURE__*/_react.default.createElement("div", {
    className: "alignCenter justify",
    style: {
      top: "-12px",
      position: "relative",
      zIndex: "2"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "normalText"
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "red"
    }
  }, props.modalObject.data.innerError))) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox upperFieldBox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: updateUsername,
    value: props.modalObject.data.username,
    type: "text",
    style: {
      width: "95%"
    },
    className: "invisible normalText",
    placeholder: "Correo \xF3 n\xFAmero de tel\xE9fono"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox bottomFieldBox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: updatePassword,
    value: props.modalObject.data.password,
    type: "password",
    style: {
      width: "95%"
    },
    className: "invisible normalText",
    placeholder: "Contrase\xF1a"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: login,
    className: "wideButton alignCenter justify",
    style: {
      marginTop: "15px"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "wideText"
  }, "Iniciar sesion")), /*#__PURE__*/_react.default.createElement(_facebookLoginRenderProps.default, {
    appId: "327442284949288",
    disableMobileRedirect: true,
    callback: responseFacebook,
    fields: "name,first_name,last_name,email,picture",
    render: function render(renderProps) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "buttonClass",
        onClick: renderProps.onClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "optionBox alignCenter justify",
        style: {
          marginTop: "15px"
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: "absolute",
          left: "20px"
        }
      }, /*#__PURE__*/_react.default.createElement("svg", {
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: "M21.7306 23C22.4316 23 23 22.4317 23 21.7306V1.2694C23 0.568259 22.4316 0 21.7306 0H1.2694C0.568172 0 0 0.568259 0 1.2694V21.7306C0 22.4317 0.568172 23 1.2694 23H21.7306Z",
        fill: "#395185"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M17.789 23V13.8771H21.327L21.8567 10.3218H17.789V8.05172C17.789 7.02234 18.1193 6.32085 19.8248 6.32085L22 6.32002V3.14015C21.6236 3.09681 20.3325 3 18.8304 3C15.6941 3 13.5471 4.65688 13.5471 7.69973V10.3218H10V13.8771H13.5471V23H17.789Z",
        fill: "white"
      }))), /*#__PURE__*/_react.default.createElement("p", {
        className: "normalText"
      }, "Continuar con Facebook")));
    }
  }), /*#__PURE__*/_react.default.createElement(_reactGoogleLogin.default, {
    scope: "email https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly",
    clientId: "483932223498-7aopai2dl8boii87lrjf6nto5ob0opnt.apps.googleusercontent.com",
    render: function render(renderProps) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "buttonClass",
        onClick: renderProps.onClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "optionBox alignCenter justify",
        style: {
          marginTop: "15px"
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: "absolute",
          left: "20px"
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "22",
        height: "23",
        src: "media/google.png",
        alt: "bobo"
      })), /*#__PURE__*/_react.default.createElement("p", {
        className: "normalText"
      }, "Continuar con Google")));
    },
    buttonText: "Login",
    onSuccess: responseGoogle,
    cookiePolicy: "single_host_origin"
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: openRegister,
    className: "alignCenter",
    style: {
      top: "16px",
      position: "relative",
      zIndex: "2"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "normalText"
  }, "A\xFAn no tienes cuenta?", " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#37A000",
      fontSize: "26px !important"
    }
  }, "Reg\xEDstrate."))), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: openRegister,
    className: "alignCenter",
    style: {
      top: "28px",
      position: "relative",
      zIndex: "2"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "normalText"
  }, "Problemas para ingresar?", " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#37A000"
    }
  }, "Olvid\xE9 mi contrase\xF1a.")))));
}