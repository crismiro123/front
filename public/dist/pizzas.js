import { r as react, n, a as reactDom } from './inject-css-ccfe6d81.js';
import { m as modules_a0d8d064, P as Page } from './card.module-657c1a53.js';

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

function Card(props) {
  const {
    title,
    imageUrl,
    body,
    children,
    alt = ''
  } = props;
  return /*#__PURE__*/react.createElement("div", {
    className: modules_a0d8d064.cardcontainer
  }, /*#__PURE__*/react.createElement("div", {
    className: modules_a0d8d064.imagecontainer
  }, /*#__PURE__*/react.createElement("img", {
    className: modules_a0d8d064.image,
    src: imageUrl,
    alt: alt
  })), /*#__PURE__*/react.createElement("div", {
    className: modules_a0d8d064.title
  }, /*#__PURE__*/react.createElement("h3", null, title)), /*#__PURE__*/react.createElement("div", {
    className: modules_a0d8d064.cuerpo
  }, /*#__PURE__*/react.createElement("p", null, body)), children);
}

var css = ".search_module_buscar__388da197{\r\n    display:grid;\r\n    grid-template-columns: 50% 20% 20%;\r\n    \r\n    \r\n}\r\n\r\n.search_module_buscador__388da197{\r\n    width: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDOzs7QUFHdEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1c2NhcntcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDIwJSAyMCU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uYnVzY2Fkb3J7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn0iXX0= */";
var modules_812c1e0e = {"buscar":"search_module_buscar__388da197","buscador":"search_module_buscador__388da197"};
n(css,{});

function Search() {
  return /*#__PURE__*/react.createElement(Form, {
    className: modules_812c1e0e.buscar
  }, /*#__PURE__*/react.createElement(Input, {
    placeholder: "Buscar mi pizza favorita"
  }), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Filtrar"
  }), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Ordenar"
  }));
}

var css$1 = ".pizzacard_module_pizzacard__9925729d{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: auto;\r\n    \r\n}\r\n\r\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvY29tcG9uZW50cy9waXp6YWNhcmQvcGl6emFjYXJkLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHdCQUF3Qjs7QUFFNUIiLCJzb3VyY2VzQ29udGVudCI6WyIucGl6emFjYXJke1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4iXX0= */";
var modules_10c1c264 = {"pizzacard":"pizzacard_module_pizzacard__9925729d"};
n(css$1,{});

function PizzaCard() {
  return /*#__PURE__*/react.createElement("div", {
    className: modules_10c1c264.pizzacard
  }, /*#__PURE__*/react.createElement(Card, {
    title: "Margarita",
    imageUrl: "https://i1.wp.com/www.thefoodieadventure.com/wp-content/uploads/2020/04/446732665_417279_1.jpg",
    body: "8,99 \u20AC"
  }, /*#__PURE__*/react.createElement("button", null, "A\xF1adir al carrito"), /*#__PURE__*/react.createElement("button", null, "Ver m\xE1s")), /*#__PURE__*/react.createElement(Card, {
    title: "Barbacoa",
    imageUrl: "http://wallpaperstock.net/pizza-basil-cheese-vegetables_wallpapers_54017_1280x960.jpg",
    body: "10,99 \u20AC"
  }, /*#__PURE__*/react.createElement("button", null, "A\xF1adir al carrito"), /*#__PURE__*/react.createElement("button", null, "Ver m\xE1s")), /*#__PURE__*/react.createElement(Card, {
    title: "Carbonara",
    imageUrl: "https://craftlog.com/m/i/4887788=s1280=h960",
    body: "10,99 \u20AC"
  }, /*#__PURE__*/react.createElement("button", null, "A\xF1adir al carrito"), /*#__PURE__*/react.createElement("button", null, "Ver m\xE1s")), /*#__PURE__*/react.createElement(Card, {
    title: "Carbonara",
    imageUrl: "https://craftlog.com/m/i/4887788=s1280=h960",
    body: "10,99 \u20AC"
  }, /*#__PURE__*/react.createElement("button", null, "A\xF1adir al carrito"), /*#__PURE__*/react.createElement("button", null, "Ver m\xE1s")), /*#__PURE__*/react.createElement(Card, {
    title: "Carbonara",
    imageUrl: "https://craftlog.com/m/i/4887788=s1280=h960",
    body: "10,99 \u20AC"
  }, /*#__PURE__*/react.createElement("button", null, "A\xF1adir al carrito"), /*#__PURE__*/react.createElement("button", null, "Ver m\xE1s")), /*#__PURE__*/react.createElement(Card, {
    title: "Carbonara",
    imageUrl: "https://craftlog.com/m/i/4887788=s1280=h960",
    body: "10,99 \u20AC"
  }, /*#__PURE__*/react.createElement("button", null, "A\xF1adir al carrito"), /*#__PURE__*/react.createElement("button", null, "Ver m\xE1s")));
}

var css$2 = ".index_module_pagina__8fc118c8{\r\n  display:grid;\r\n  grid-template-columns: 1fr 1fr;\r\n\r\n\r\n}\r\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvaW5kZXgubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7OztBQUdoQyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF7XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHJcblxyXG59XHJcbiJdfQ== */";
var modules_c21c94f2 = {"pagina":"index_module_pagina__8fc118c8"};
n(css$2,{});

function Pizzas() {
  return /*#__PURE__*/react.createElement(Page, {
    className: modules_c21c94f2.pagina
  }, /*#__PURE__*/react.createElement(Search, {
    className: modules_c21c94f2.formulario
  }), /*#__PURE__*/react.createElement(PizzaCard, null));
}
Pizzas.route = "/pizzas";

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(Pizzas, window._props_), app);
//# sourceMappingURL=pizzas.js.map
