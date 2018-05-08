export default {
  methods: {
    countDown (target = []) {
      target.forEach((val, idx) => {
        this.countDownTimer(val)
      })
    },

    countDownTimer (data) {
      data.timer = setInterval(() => {
        data.timeLeft--
        if (data.timeLeft <= 0) {
          clearInterval(data.timer)
          data.isOverdue = true // 过期
        }
        data.countDownTxt = this.countDownTxtFormat(data.timeLeft)
      }, 1000)
    },

    countDownTxtFormat (timeLeft) {
      if (timeLeft <=0) return `还剩:-天 -时 -分 -秒`

      let days = parseInt(timeLeft / 86400)
      let hours = parseInt((timeLeft / 3600) % 24)
      let minutes = parseInt((timeLeft / 60) % 60)
      let seconds = parseInt(timeLeft % 60)
      
      if (hours < 10) hours = '0' + hours
      if (minutes < 10) minutes = '0' + minutes
      if (seconds < 10) seconds = '0' + seconds
      
      return `还剩:${days}天 ${hours}时 ${minutes}分 ${seconds}秒`
    }
  }
}