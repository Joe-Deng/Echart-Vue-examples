import axios from "axios"
//基础地址
const BaseURL = 'http://47.108.151.159:8111';

export default {
  //封装请求函数
  request: function(path) {
    if (path) {
      return axios.get(BaseURL + path)
    }
  }


}