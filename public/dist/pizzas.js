import { r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './page-b3fdf897.js';
import { F as Form, I as Input } from './form-5f8ace5d.js';

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

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(Pizzas, window._props_), app);
//# sourceMappingURL=pizzas.js.map
