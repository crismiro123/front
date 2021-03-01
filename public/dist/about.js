import { n, r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './card.module-657c1a53.js';

var css = ".index_module_about__1fd7148c {\r\n    color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hYm91dC9pbmRleC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0iXX0= */";
var modules_c21c94f2 = {"about":"index_module_about__1fd7148c"};
n(css,{});

function About({
  foo
}) {
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement("h1", {
    className: modules_c21c94f2.about
  }, "About ", foo));
}
About.route = '/about';

About.getData = async function () {
  return {
    foo: 12
  };
};

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(About, window._props_), app);
//# sourceMappingURL=about.js.map
