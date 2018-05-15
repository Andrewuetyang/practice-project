let toastTag = null // toast标签
/**
 * 吐司信息
 * @param options string或者object{message,timeout,iconClass,callback}
 */
function toast(options) {
  if (toastTag) {
    document.body.removeChild(toastTag)
  }
  let message = '',
    timeout = 2000,
    iconDiv = '',
    boxClass = 'toast-box'

  if (typeof options === 'string') {
    message = options
  } else if (typeof options === 'object') {
    if (options.message) message = options.message
    if (options.timeout) timeout = options.timeout
    if (options.iconClass) {
      iconDiv = `<div class="toast-icon ${options.iconClass}"></div>`
      boxClass = 'toast-box has-icon'
    }
  } else {
    return
  }

  //处理换行
  message = message.replace(/\n/g, '<br/>')

  let oBody = document.body
  let div = document.createElement("div")
  div.className = boxClass
  div.innerHTML = `${iconDiv}<div class="toast-text">${message}</div>`
  oBody.appendChild(div);
  setTimeout(() => {
    div.style.opacity = '1'
  }, 20)

  toastTag = div

  setTimeout(() => {
    div.style.opacity = '0'
    setTimeout(() => {
      if (toastTag === div) {
        toastTag = null
        document.body.removeChild(div)
      }
      if (options.callback) {
        options.callback()
      }
    }, 500)
  }, timeout)
}

export default {
  toast,
}