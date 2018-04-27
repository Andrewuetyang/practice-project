/**
 * 时间戳格式化
 * @param {int} timestamp 10位时间戳 秒为单位
 * @param {string} fmt 日期格式
 * @return {string} 格式化后的结果
 */
const timestampFormat = (timeStamp, fmt) => {
  let date = new Date(timeStamp * 1000)
  let o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    "S": date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 价格格式化 适用于价格显示有符号且符号跟价格字体一样大，无符号的价格也可以用
 * @param {int} value 分为单位的价格，如果出现小数，将不适用该过滤器
 * @param {string} token 货币符号
 * @return {string} 格式化后的价格
 */
const currency = (value, token) => {
  if (!token) return value / 100
  return `${token} ${value / 100}`
}

export {
  timestampFormat,
  currency
}