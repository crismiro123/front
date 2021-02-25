import { r as react } from './index-62b17148.js';
import { P as Page } from './page-c12ecba8.js';
import './inject-css-d9f4d27b.js';

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

export default Pizzas;
//# sourceMappingURL=pizzas.js.map
