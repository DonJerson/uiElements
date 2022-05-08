"use strict";

var _react = require("react");

var _client = require("react-dom/client");

var _PrietoLogin = _interopRequireDefault(require("./PrietoLogin/PrietoLogin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootElement = document.getElementById("root");
var root = (0, _client.createRoot)(rootElement);
root.render( /*#__PURE__*/React.createElement(_react.StrictMode, null, /*#__PURE__*/React.createElement(_PrietoLogin.default, null)));