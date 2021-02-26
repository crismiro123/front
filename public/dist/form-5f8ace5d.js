import { r as react } from './inject-css-ccfe6d81.js';

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

export { Form as F, Input as I };
//# sourceMappingURL=form-5f8ace5d.js.map
