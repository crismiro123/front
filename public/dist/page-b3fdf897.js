import { n, r as react } from './inject-css-ccfe6d81.js';

var css = ".page_module_page__0b9cd8b3 {\r\n    color: red;\r\n}\r\n\r\n.page_module_mainContainer__0b9cd8b3 {\r\n    border: 2px solid red;\r\n    width: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3BhZ2UvcGFnZS5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubWFpbkNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICB3aWR0aDogMCBhdXRvO1xyXG59Il19 */";
var modules_2e8731dc = {"page":"page_module_page__0b9cd8b3","mainContainer":"page_module_mainContainer__0b9cd8b3"};
n(css,{});

var css$1 = ".navbar_module_navbar__19865220 {\r\n    width: 500px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3BhZ2UvbmF2YmFyLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICB3aWR0aDogNTAwcHhcclxufSJdfQ== */";
var modules_991e1ce2 = {"navbar":"navbar_module_navbar__19865220"};
n(css$1,{});

function NavBar({
  items
}) {
  return /*#__PURE__*/react.createElement("nav", {
    className: modules_991e1ce2.navbar
  }, /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/about"
  }, "About")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/login"
  }, "Log in")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/register"
  }, "Register")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "/register"
  }, items))));
}

function Page({
  children
}) {
  return /*#__PURE__*/react.createElement("div", {
    className: modules_2e8731dc.page
  }, /*#__PURE__*/react.createElement(NavBar, {
    items: ['HOME', 'Logout']
  }), /*#__PURE__*/react.createElement("main", {
    className: modules_2e8731dc.mainContainer
  }, children));
}

export { Page as P };
//# sourceMappingURL=page-b3fdf897.js.map
