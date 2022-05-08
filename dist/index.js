"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./PrietoLogin/media/css/styles.css");

var _PrietoLogin = _interopRequireDefault(require("./PrietoLogin/PrietoLogin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import reportWebVitals from './reportWebVitals';
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_PrietoLogin.default, null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(
//   <StrictMode>
//     <PrietoLogin />
//   </StrictMode>
// );