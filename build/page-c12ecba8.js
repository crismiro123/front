import { r as react } from './index-62b17148.js';
import { n } from './inject-css-d9f4d27b.js';

var css = ".page_module_page__32c463a4 {\r\n    color: red;\r\n}";
var modules_2e8731dc = {"page":"page_module_page__32c463a4"};
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
  }, "About")))), /*#__PURE__*/react.createElement("main", null, children));
}

export { Page as P };
//# sourceMappingURL=page-c12ecba8.js.map
