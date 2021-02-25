import { r as react } from './index-62b17148.js';
import { P as Page } from './page-3188b9a2.js';
import { n } from './inject-css-d9f4d27b.js';

var css = ".index_module_about__1fd7148c {\r\n    color: green;\r\n}";
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

export default About;
//# sourceMappingURL=about.js.map
