import { r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './page-529abd4f.js';

function Input(props) {
  const {
    label,
    className,
    ...inputProps
  } = props;
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, /*#__PURE__*/react.createElement("label", null, label), /*#__PURE__*/react.createElement("input", inputProps));
}

function Form(props) {
  const {
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/react.createElement("form", restProps, children);
}

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
