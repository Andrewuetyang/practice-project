export default {
  methods: {
    fetchData (url) {
      return new Promise((resolve, reject) => {
        this.$jsonp(url, {}, (err, res) => {
          if (err) {
            return reject('网络错误')
          }
          if (res.code != 1) {
            return reject(res)
          }
          resolve(res)
        })
      })
    },
  }
}