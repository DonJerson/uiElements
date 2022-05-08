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

  var updatePhone = function updatePhone(e) {
    var newVal = _objectSpread({}, props.modalObject.data);

    newVal.phoneNumber = e.target.value;
    props.modalObject.setMethod(newVal);
  };

  var updateFirstName = function updateFirstName(e) {
    var newVal = _objectSpread({}, props.modalObject.data);

    newVal.firstName = e.target.value;
    props.modalObject.setMethod(newVal);
  };

  var updateLastName = function updateLastName(e) {
    var newVal = _objectSpread({}, props.modalObject.data);

    newVal.lastName = e.target.value;
    props.modalObject.setMethod(newVal);
  };

  var register = function register(e) {
    e.preventDefault();
    props.userPack.methods.handleRegister();
  };

  var openLogin = function openLogin() {
    var newVal = _objectSpread({}, props.modalObject.data);

    if (window.location.href.includes("loginMobile")) {
      newVal.login = false;
      props.modalObject.setMethod(newVal);
    } else {
      newVal.active = true;
      newVal.login = true;
      props.modalObject.setMethod(newVal);
    }
  };

  var responseGoogle = function responseGoogle(e) {
    console.log("qloq");
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.modalObject.data.innerError ? /*#__PURE__*/_react.default.createElement("div", {
    className: "alignCenter justify"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "red",
      paddingBottom: "10px",
      zIndex: "40"
    }
  }, props.modalObject.data.innerError)) : null, props.modalObject.data.innerLoading ? /*#__PURE__*/_react.default.createElement(_Loader.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, step === 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox upperFieldBox "
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "smallText",
    style: {
      position: "absolute",
      top: "4px"
    }
  }, "Pa\xEDs/Regi\xF3n"), /*#__PURE__*/_react.default.createElement("p", {
    className: " normalText",
    style: {
      position: "absolute",
      bottom: "10px"
    }
  }, "Rep\xFAblica Dominicana (+1)"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    style: {
      position: "Absolute",
      right: "15px"
    },
    width: "22",
    height: "13",
    viewBox: "0 0 22 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.0989 1.37235L20.0087 0.331722C19.5422 -0.118278 18.781 -0.108903 18.3243 0.350472L10.7227 6.90204L3.12076 0.350472C2.66406 -0.104215 1.9029 -0.11359 1.43638 0.331722L0.346205 1.37235C-0.115402 1.80828 -0.115402 2.52079 0.346205 2.96141L9.89263 12.0739C10.3493 12.5145 11.0958 12.5145 11.5574 12.0739L16.3281 7.51766L21.0989 2.96141C21.5605 2.52547 21.5605 1.81297 21.0989 1.37235Z",
    fill: "#2D2D2D"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox bottomFieldBox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: updatePhone,
    value: props.modalObject.data.phoneNumber,
    type: "tel",
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    required: true,
    style: {
      width: "95%"
    },
    className: "invisible normalText",
    placeholder: "N\xFAmero de tel\xE9fono"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: nextStep,
    className: "wideButton alignCenter justify",
    style: {
      marginTop: "15px"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "wideText"
  }, "Continuar")), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: nextStep
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
    height: "19",
    viewBox: "0 0 23 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.5 14.25C9.66 14.25 7.82 12.5875 6.9 11.875C2.3 8.55 0.92 7.3625 0 6.65V16.625C0 17.9364 1.02997 19 2.3 19H20.7C21.97 19 23 17.9364 23 16.625V6.65C22.08 7.3625 20.7 8.55 16.1 11.875C15.18 12.5875 13.34 14.25 11.5 14.25ZM20.7 0H2.3C1.02997 0 0 1.06355 0 2.375V3.5625C1.84 4.9875 1.61 4.9875 8.28 9.975C8.97 10.45 10.35 11.875 11.5 11.875C12.65 11.875 14.03 10.45 14.72 10.2125C21.39 5.225 21.16 5.225 23 3.8V2.375C23 1.06355 21.97 0 20.7 0Z",
    fill: "black"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "normalText"
  }, "Continuar con correo el\xE9ctronico"))), /*#__PURE__*/_react.default.createElement(_facebookLoginRenderProps.default, {
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
        src: "./media/google.png"
      })), /*#__PURE__*/_react.default.createElement("p", {
        className: "normalText"
      }, "Continuar con Google")));
    },
    buttonText: "Login",
    onSuccess: responseGoogle,
    cookiePolicy: "single_host_origin"
  })) : null, step === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    onClick: prevStep,
    style: {
      position: "relative",
      bottom: "20px"
    },
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.4965 18.6605L10.5055 19.6772C10.0859 20.1077 9.40743 20.1077 8.9923 19.6772L0.314697 10.7786C-0.104899 10.3481 -0.104899 9.65199 0.314697 9.22607L8.9923 0.322929C9.4119 -0.107572 10.0849 -0.107675 10.5 0.322827L11.4786 1.5001C10.9832 0.991744 9.93299 2.07409 9.5 2.50001L2.5 9.26728L18.5 9C19.0937 9 20 8.65817 20 9.26728V10.7328C20 11.3419 19.5937 11 19 11L2.5 10.7786L11 18.5C11.4375 18.9259 11.925 18.2254 11.4965 18.6605Z",
    fill: "#616161"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox upperFieldBox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: updateFirstName,
    value: props.modalObject.data.firstName,
    type: "text",
    style: {
      width: "95%"
    },
    className: "invisible normalText",
    placeholder: "Nombre"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox bottomFieldBox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: updateLastName,
    value: props.modalObject.data.lastName,
    type: "text",
    style: {
      width: "95%"
    },
    className: "invisible normalText",
    placeholder: "Apellido"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox",
    style: {
      marginTop: "15px"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: updateUsername,
    value: props.modalObject.data.username,
    type: "email",
    style: {
      width: "95%"
    },
    className: "invisible normalText",
    placeholder: "Correo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fieldBox",
    style: {
      marginTop: "15px"
    }
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
    onClick: register,
    className: "wideButton alignCenter justify",
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "wideText"
  }, "Completar registro"))) : null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: openLogin,
    className: "alignCenter",
    style: {
      top: "16px",
      position: "relative",
      zIndex: "2"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "normalText"
  }, "Ya est\xE1s registrado?", " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#37A000"
    }
  }, "Inicia sesion.")))));
}