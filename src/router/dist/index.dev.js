"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Bar = _interopRequireDefault(require("../views/Bar.vue"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//暴力原型链实现axios，除此之外，可以使用VueAxios来实现
_vue["default"].prototype.$http = _axios["default"];

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Bar',
  component: _Bar["default"]
}, {
  path: '/line',
  name: 'Line',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Line.vue'));
    });
  }
}, {
  path: "/scatter",
  name: 'Scatter',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Scatter.vue"));
    });
  }
}, {
  path: "/pie",
  name: 'Pie',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Pie.vue"));
    });
  }
}, {
  path: "/map",
  name: 'Map',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Map.vue"));
    });
  }
}, {
  path: "/radar",
  name: 'Radar',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Radar.vue"));
    });
  }
}, {
  path: "/gauge",
  name: 'Gauge',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Gauge.vue"));
    });
  }
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;