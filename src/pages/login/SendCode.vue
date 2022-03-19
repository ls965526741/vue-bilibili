<template>
  <span @click="getCode">{{ codeText }}</span>
</template>

<script>
export default {
  data() {
    return {
      codeText: '获取验证码',
      codeDisabled: false
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="less" scoped>
span {
  position: absolute;
  top: 6.5px;
  right: 10px;
  padding: 5px 10px;
  background-color: #f1f3f4;
  border-radius: 5px;
  color: @logoColor;
}
</style>
