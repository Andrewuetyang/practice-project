<template>
  <!-- 预约弹窗表单-->
  <div class="popup-layer" v-if="isFormPopupShow">
    <div class="popup-content">
      <div class="popup-close" @click="$emit('close')">
        <i class="icon-close-base icon-close"></i>
      </div>
      <h2 class="ta-c">{{info.title}}</h2>
      <form>
        <ul>
          <li class="mt-10 mb-10 fx fx-align-center">
            <div class="f-13" style="width: 26%;">您的姓名:</div>
            <input class="fx-1 text-input" type="text" maxlength="30" v-model="userName">
          </li>
          <li class="mt-10 mb-10 fx fx-align-center">
            <div class="f-13" style="width: 26%;">联系电话:</div>
            <input class="fx-1 text-input" type="number" pattern="[0-9]*" v-model="phoneNo">
          </li>
          <li class="mt-10 mb-10 fx fx-align-center">
            <div class="f-13" style="width: 26%;">备注信息:</div>
            <textarea class="fx-1 text-area"
                      maxlength="800" v-model="remark"></textarea>
          </li>
          <!-- <li class="mt-10 mb-10 fx fx-align-center">
            <div class="f-13" style="width: 26%;">验证码:</div>
            <input class="fx-1 text-input" type="text" maxlength="10" v-model="code">
            <div></div>
          </li> -->
        </ul>
        <div class="f-12" style="color: #f00;">* 温馨提示：联系方式提交后，将会有专业的经纪人联系您，请您耐心等待.</div>
        <div class="btn-base f-18 lh-38 btn-fbk-green mt-10" @click="check">提交</div>
      </form>
    </div>
  </div>
</template>
<script>
import fetchMixin from '@/components/common/fetch-mixin.js'
export default {
  mixins: [fetchMixin],
  props: ['isFormPopupShow', 'info'],
  data () {
    return {
      userName: '',
      phoneNo: '',
      remark: '',
      // code: ''
    }
  },
  watch: {
    isFormPopupShow (newV) {
      if (newV) {
        this.userName = ''
        this.phoneNo = ''
        this.remark = ''
      }
    },
  },
  methods: {
    // 预约校验
    check () {
      // 未填写联系人
      if (!this.userName) return alert('姓名不能为空')

      // 判断联系人电话
      if (this.phoneNo) {
        if (!/^1\d{10}$/.test(this.phoneNo)) return alert('请输入正确的手机号码')
      } else {
        return alert('号码不能为空')
      }

      this.submit()
    },

    //提交信息, 完成后关闭窗口
    submit () {
      let queryData = `type=${this.info.type}&subscribe_id=1&name=${this.userName}&tel=${this.phoneNo}`
      if (this.remark) queryData += `&remark=${this.remark}`
      this.fetchData(`/api/common/subscribe?${queryData}`).then(res => {
        this.$methods.toast(res.msg)
        this.$emit('close')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.text-input {
  padding: 0 8px;
  height: 31px;
  line-height: 31px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
}

.text-area {
  height: 44px;
  line-height: 22px;
  padding: 0 8px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
}

.icon-close-base {
  display: block;
  border-radius: 50%;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 60%;
    left: 50%;
    top: 51%;
    border-radius: 1px;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 60%;
    left: 50%;
    top: 51%;
    border-radius: 1px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

.popup-layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  .popup-content {
    box-sizing: border-box;
    width: 81.1%;
    background: #fff;
    border-radius: 2px;
    padding: 16px 23px;
    position: relative;
    .popup-close {
      position: absolute;
      top: 7px;
      right: 14px;
      .icon-close {
        width: 24px;
        height: 24px;
        border: 2px solid #a09e9e;
        &::before {
          background: #a09e9e;
        }
        &::after {
          background: #a09e9e;
        }
      }
    }
  }
}
</style>

