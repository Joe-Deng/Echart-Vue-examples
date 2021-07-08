"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//基础地址
var BaseURL = 'http://47.108.151.159:8111';
var _default = {
  //封装请求函数
  request: function request(path) {
    if (path) {
      return _axios["default"].get(BaseURL + path);
    }
  }
};
exports["default"] = _default;