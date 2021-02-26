import { r as react } from './index-62b17148.js';
import { P as Page } from './page-e50be18c.js';
import { F as Form, I as Input } from './form-0d0d69be.js';
import './inject-css-d9f4d27b.js';

function Search() {
  return /*#__PURE__*/react.createElement(Form, null, /*#__PURE__*/react.createElement(Input, {
    placeholder: "Buscar mi pizza favorita"
  }), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Filtrar"
  }), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Ordenar"
  }));
}

function Pizzas() {
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement(Search, null));
}
Pizzas.route = "/pizzas";

export default Pizzas;
//# sourceMappingURL=pizzas.js.map
