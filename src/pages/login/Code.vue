<template>
  <div class="register">
    <van-form>
      <div class="get_code">
        <van-field :autofocus="true" v-model="userList.phone" name="手机号" label="手机号" placeholder="手机号" />
        <span @click="getCode">{{ codeText }}</span>
      </div>
      <van-field v-model="userList.code" name="验证码" label="验证码" placeholder="验证码" />
      <div style="margin: 16px">
        <van-button block color="#fb7299" @click="register">验证登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { registerByCode, sendCode } from '@/api'
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      codeDisabled: false,
      codeText: '获取验证码',
      userList: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {
    async register() {
      if (!this.checked) {
        this.$emit('isChecked')
        return false
      }
      const { data } = await registerByCode(this.userList)
      if (data.meta.status !== 200) return this.$toast(data.meta.msg)
      sessionStorage.setItem('token', data.meta.token)
      this.$toast.success(data.meta.msg)
      this.$router.push('/profile')
    },
    async getCode() {
      if (this.codeDisabled) return false
      if (!this.validateTel(this.userList.phone)) return this.$toast('手机号错误！')
      let count = 60
      this.codeDisabled = true
      const timer = setInterval(() => {
        count = count - 1
        if (count <= 0) {
          clearInterval(timer)
          this.codeText = '发送验证码'
          this.codeDisabled = false
          return false
        }
        this.codeText = `${count}s后可发送`
      }, 1000)
      // 发送短信验证码
      const { data } = await sendCode({ phone: this.userList.phone })
      if (data.meta.status !== 200) return this.$toast(data.meta.msg)
      console.log(data.data.code)
    },
    validateTel(tel) {
      const reg = /^1(3|5|8)[0-9]{9}$/
      return reg.test(tel)
    }
  }
}
</script>

<style lang="less" scoped>
.get_code {
  position: relative;
  height: 44px;
  span {
    position: absolute;
    top: 6.5px;
    right: 10px;
    padding: 5px 10px;
    background-color: #f1f3f4;
    border-radius: 5px;
    color: @logoColor;
    font-size: 14px;
  }
}
</style>
