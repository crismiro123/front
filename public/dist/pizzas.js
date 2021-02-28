import { r as react, n, a as reactDom } from './inject-css-dc255021.js';
import { m as modules_a0d8d064, P as Page } from './card.module-ed5d406b.js';

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

var css = ".search_module_buscar__1b2dafec{\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEMiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVzY2Fye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG59Il19 */";
var modules_812c1e0e = {"buscar":"search_module_buscar__1b2dafec"};
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

var css$1 = ".pizzacard_module_pizzacard__184a44e1{\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin:auto\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvY29tcG9uZW50cy9waXp6YWNhcmQvcGl6emFjYXJkLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qjs7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5waXp6YWNhcmR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0b1xyXG4gICAgXHJcbn0iXX0= */";
var modules_10c1c264 = {"pizzacard":"pizzacard_module_pizzacard__184a44e1"};
n(css$1,{});

function PizzaCard() {
  return /*#__PURE__*/react.createElement("div", {
    className: modules_10c1c264.pizzacard
  }, /*#__PURE__*/react.createElement(Card, {
    title: "Margarita",
    imageUrl: "https://i1.wp.com/www.thefoodieadventure.com/wp-content/uploads/2020/04/446732665_417279_1.jpg",
    body: "8,99 \u20AC"
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Card, {
    title: "Barbacoa",
    imageUrl: "http://wallpaperstock.net/pizza-basil-cheese-vegetables_wallpapers_54017_1280x960.jpg",
    body: "10,99 \u20AC"
  }), /*#__PURE__*/react.createElement(Card, {
    title: "Carbonara",
    imageUrl: "https://lh3.googleusercontent.com/proxy/0UTI6BsCdCmqyHSi7a9lGxL1AjNwSlx262TbX-2QUkQSGDMoIh8wUwd-Pfc3EYtjUWyZVXcM_c-HEImbHvjcilnPEcXdbGEAV1CKNc8FTw",
    body: "10,99 \u20AC"
  }));
}

var css$2 = ".index_module_pagina__7ed107e4{\r\n  display:grid;\r\n  grid-template-columns: 2;\r\n}\r\n\r\n.index_module_formulario__7ed107e4{\r\n  display:grid;\r\n  grid-template-columns: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvaW5kZXgubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyO1xyXG59Il19 */";
var modules_c21c94f2 = {"pagina":"index_module_pagina__7ed107e4","formulario":"index_module_formulario__7ed107e4"};
n(css$2,{});

function Pizzas() {
  return /*#__PURE__*/react.createElement(Page, {
    className: modules_c21c94f2.pagina
  }, /*#__PURE__*/react.createElement(Search, {
    className: modules_c21c94f2.formulario
  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(PizzaCard, null));
}
Pizzas.route = "/pizzas";

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(Pizzas, window._props_), app);
//# sourceMappingURL=pizzas.js.map
