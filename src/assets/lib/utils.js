
/**
 * 2018-04-02 by michael.yang
 */

const _userAgent = navigator.userAgent;

// 判断是不是在微信里
const isWeiXin = function (){
  return /MicroMessenger/i.test(_userAgent);
};

// 判断是不是在支付宝里
const isZhiFuBao = function (){
  return /Alipay/i.test(_userAgent);
};

// 判断是不是苹果手机
const isIphone = function () {
  return /iPhone/i.test(_userAgent);
};

// url 参数获取
const getUrlParam = function (name) {
  let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

// 检测是否支持sessionStorage
const isLocalStorageSupported = function() {
  var testKey = 'test',
    storage = window.sessionStorage;
  try {
    storage.setItem(testKey, 'testValue');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    alert('您处于无痕浏览,无法为您提供良好的体验，请切换正常模式访问');
    return false;
  }
}

// 是否是空对象
const isEmptyObject = function(obj) {
  for (var key in obj) {
    return false
  }
  return true
}

/**
 * 解析json字符串为json对象
 * @param data, e.g. "{'a':1}"
 * @returns {any}
 */
const parseJSON = function(data) {
  if (!data || typeof data !== "string") {
    return {};
  }
  // Make sure leading/trailing whitespace is removed (IE can't handle it)
  data = data.trim();
  // Attempt to parse using the native JSON parser first
  if (JSON && JSON.parse) {
    return JSON.parse(data);
  }
  // Make sure the incoming data is actual JSON
  // Logic borrowed from http://json.org/json2.js
  if (/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\/bfnrt]|u[\da-fA-F]{4})/g, "@")
    .replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][-+]?\d+|)/g, "]")
    .replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
    return function () {
      return data;
    }();
  }
  return {};
}

/**
 * 转化json对象为字符串
 * @param json
 * @returns {*|string}
 */
const jsonStringify = function(json) {
  if (typeof (JSON) === 'object' && JSON.stringify) {
    return JSON.stringify(json);
  }
  return {};
}


// 获取cookie值
const getCookie = function(objname) {
  var arrstr = document.cookie.split('; ')
  for (var i = 0; i < arrstr.length; i++) {
    var temp = arrstr[i].split('=');
    if (temp[0] == objname) return unescape(temp[1])
  }
}

export {
  isWeiXin, // 判断是不是在微信里
  isZhiFuBao, // 判断是不是在支付宝里
  isIphone, // 判断是否是苹果手机
  getUrlParam, // getUrlParam
  isLocalStorageSupported, // isLocalStorageSupported
  isEmptyObject, // 是否是空对象
  parseJSON, // 解析json字符串为json对象
  jsonStringify, // 转化json对象为字符串
  getCookie, // 获取cookie
}