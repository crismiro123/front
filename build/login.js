import { r as react } from './index-62b17148.js';
import { P as Page } from './page-3188b9a2.js';
import { n } from './inject-css-d9f4d27b.js';

var css = ".index_module_login__70c8fc73 {\n    color: red;\n}\n\n.index_module_test__70c8fc73 {\n    width: 267px;\n    height: 72px;\n    flex-grow: 0;\n    margin: 0 78px 40px 0;\n    font-family: Quicksand;\n    font-size: 24px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: left;\n    color: var(--black);\n  }\n  .index_module_test__70c8fc73 .index_module_textStyle1__70c8fc73 {\n    font-size: 36px;\n  }";
var modules_c21c94f2 = {"login":"index_module_login__70c8fc73","test":"index_module_test__70c8fc73","text-style-1":"index_module_textStyle1__70c8fc73"};
n(css,{});

function Login({
  cris
}) {
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement("div", {
    className: modules_c21c94f2.test
  }, /*#__PURE__*/react.createElement("span", null, "Inicia sessi\xF3n"), /*#__PURE__*/react.createElement("h1", {
    className: "text-style-1"
  }, "y pide tu pizza favorita.")), /*#__PURE__*/react.createElement("form", {
    action: ""
  }, /*#__PURE__*/react.createElement("label", {
    htmlFor: "Ingresese Su Nombre"
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    text: "Entre su nombre"
  })));
}
Login.route = '/login';

Login.getData = async function () {
  return {
    cris: 12
  };
};

export default Login;
//# sourceMappingURL=login.js.map
