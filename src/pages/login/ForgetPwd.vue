<template>
  <div class="forget">
    <van-form>
      <van-field v-model="userList.tel" name="手机号" label="手机号" placeholder="手机号" />
      <div class="get_code">
        <van-field v-model="code" name="验证码" label="验证码" placeholder="验证码" />
        <span @click="getCode">{{ codeText }}</span>
      </div>
      <van-field v-model="userList.password" type="password" name="密码" label="密码" placeholder="密码" />
      <van-field v-model="rePassword" type="password" name="确认密码" label="确认密码" placeholder="确认密码" />
      <div style="margin: 16px">
        <van-button round block :disabled="buttonDisabled" @click="forget">重置密码</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonDisabled: true,
      codeDisabled: false,
      code: '',
      userList: {
        tel: '',
        password: ''
      },
      rePassword: '',
      codeText: '获取验证码'
    }
  },
  methods: {
    forget() {
      const pwd = this.userList.password + ''
      if (pwd.length < 6) return this.$toast('密码长度至少六位')
      if (pwd !== this.rePassword + '') return this.$toast('两次密码输入不一致')
      // 发送修改密码请求
    },

    async getCode() {
      if (this.codeDisabled) return false
      if (!this.validateTel(this.userList.tel)) return this.$toast('手机号错误！')
      // 发送短信验证码
      // const { data } = await getCode()
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
    },
    validateTel(tel) {
      const reg = /^1(3|5|8)[0-9]{9}$/
      return reg.test(tel)
    }
  },
  watch: {
    code(newVal) {
      if (newVal.length === 6) {
        this.buttonDisabled = false
      } else {
        this.buttonDisabled = true
      }
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
    font-size: 14px;
    color: @logoColor;
  }
}
</style>
