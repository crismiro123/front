import { r as react } from './index-62b17148.js';
import { n } from './inject-css-d9f4d27b.js';

var css = ".index_module_test__dbcca493 {\r\n    color: red;\r\n}";
var modules_c21c94f2 = {"test":"index_module_test__dbcca493"};
n(css,{});

function Test(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: modules_c21c94f2.test
  }, JSON.stringify(props.todos));
}
Test.route = '/test';

Test.getData = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return {
    todos: await res.json()
  };
};

export default Test;
//# sourceMappingURL=test.js.map
