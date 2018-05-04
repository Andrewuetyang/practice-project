export default {
  methods: {
    fetchData (url) {
      return new Promise((resolve, reject) => {
        this.$jsonp(url, (err, res) => {
          if (err) {
            alert(err)
            return reject(err)
          }
          if (res.code != 1) {
            alert(res.msg)
            return reject(res.msg)
          }
          resolve(res)
        })
      })
    },
  }
}