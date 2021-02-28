import { r as react } from './index-261782d5.js';
import { n } from './inject-css-d9f4d27b.js';

var css = ".page_module_page__45b43c04 {\r\n    color:black;\r\n    display: grid;\r\n    grid-template-rows: 2;\r\n}";
var modules_2e8731dc = {"page":"page_module_page__45b43c04"};
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
    href: "/pizzas"
  }, "Carta")))), /*#__PURE__*/react.createElement("main", null, children));
}

var css$1 = "@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap');\r\n\r\n.card_module_cardcontainer__d929fdc2{\r\n  max-width: 400px;\r\n  height: auto;\r\n  color: black;\r\n  box-shadow: 0px 0px 15px -5px;\r\n  margin:30px;\r\n}\r\n.card_module_imagecontainer__d929fdc2{\r\n    max-width: 100%;\r\n}\r\n\r\n.card_module_image__d929fdc2{\r\n    max-width: 100%;\r\n    overflow:hidden;\r\n    height: auto;\r\n    background-size: cover;\r\n}\r\n\r\n.card_module_title__d929fdc2{\r\n    padding-left: 10px;\r\n    font-size: 20px;\r\n    font-family: 'Quicksand', sans-serif\r\n}\r\n\r\n.card_module_cuerpo__d929fdc2{\r\n    padding-left: 10px;\r\n    font-size: 14px;\r\n    font-family: 'Quicksand', sans-serif\r\n    \r\n\r\n}";
var modules_a0d8d064 = {"cardcontainer":"card_module_cardcontainer__d929fdc2","imagecontainer":"card_module_imagecontainer__d929fdc2","image":"card_module_image__d929fdc2","title":"card_module_title__d929fdc2","cuerpo":"card_module_cuerpo__d929fdc2"};
n(css$1,{});

export { Page as P, modules_a0d8d064 as m };
//# sourceMappingURL=card.module-88972292.js.map
