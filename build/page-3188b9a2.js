import { r as react } from './index-62b17148.js';
import { n } from './inject-css-d9f4d27b.js';

var css = ".page_module_page__0b9cd8b3 {\r\n    color: red;\r\n}\r\n\r\n.page_module_mainContainer__0b9cd8b3 {\r\n    border: 2px solid red;\r\n    width: 0 auto;\r\n}";
var modules_2e8731dc = {"page":"page_module_page__0b9cd8b3","mainContainer":"page_module_mainContainer__0b9cd8b3"};
n(css,{});

function Page({
  children
}) {
  return /*#__PURE__*/react.createElement("div", {
    className: modules_2e8731dc.page
  }, /*#__PURE__*/react.createElement("nav", null, /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/about"
  }, "About")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/login"
  }, "Log in")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/register"
  }, "Register")))), /*#__PURE__*/react.createElement("main", {
    className: modules_2e8731dc.mainContainer
  }, children));
}

export { Page as P };
//# sourceMappingURL=page-3188b9a2.js.map
