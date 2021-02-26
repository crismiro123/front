import { n, r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './page-b3fdf897.js';
import { F as Form, I as Input } from './form-5f8ace5d.js';

var css = ".index_module_login__70c8fc73 {\n    color: red;\n}\n\n.index_module_test__70c8fc73 {\n    width: 267px;\n    height: 72px;\n    flex-grow: 0;\n    margin: 0 78px 40px 0;\n    font-family: Quicksand;\n    font-size: 24px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: left;\n    color: var(--black);\n  }\n  .index_module_test__70c8fc73 .index_module_textStyle1__70c8fc73 {\n    font-size: 36px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9sb2dpbi9pbmRleC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4udGVzdCB7XG4gICAgd2lkdGg6IDI2N3B4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgbWFyZ2luOiAwIDc4cHggNDBweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB9XG4gIC50ZXN0IC50ZXh0LXN0eWxlLTEge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfSJdfQ== */";
var modules_c21c94f2 = {"login":"index_module_login__70c8fc73","test":"index_module_test__70c8fc73","text-style-1":"index_module_textStyle1__70c8fc73"};
n(css,{});

function Login({
  cris
}) {
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement("div", {
    className: modules_c21c94f2.test
  }, /*#__PURE__*/react.createElement("span", null, "Inicia sessi\xF3n"), /*#__PURE__*/react.createElement("h1", {
    className: "text-style-1"
  }, "y pide tu pizza favorita.")), /*#__PURE__*/react.createElement(Form, null, /*#__PURE__*/react.createElement(Input, null), /*#__PURE__*/react.createElement(Input, {
    label: "Tu nombre:",
    text: 'cris',
    className: "test"
  })));
}
Login.route = '/login';

Login.getData = async function () {
  return {
    cris: 12
  };
};

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(Login, window._props_), app);
//# sourceMappingURL=login.js.map
