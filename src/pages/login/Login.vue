<template>
  <div class="login">
    <van-form>
      <van-field :autofocus="true" v-model="id" clearable name="账号 " label="账号" placeholder="请输入手机号或邮箱" />
      <van-field v-model="password" center clearable label="密码" placeholder="请输入密码">
        <template #button>
          <div class="deep_btn"><van-button @click="show = true" size="small">忘记密码？</van-button></div>
        </template>
      </van-field>
      <div style="margin: 16px">
        <div class="click">
          <van-button plain block hairline color="#fb7299" @click="register">注册</van-button>
          <van-button block color="#fb7299" @click="login">登陆</van-button>
        </div>
      </div>
    </van-form>
    <!-- 动作面板 -->
    <van-action-sheet v-model="show" cancel-text="取消" close-on-click-action>
      <div>
        <div class="common" @click="findByPhone">
          <div>以绑定手机号</div>
          <div>通过手机号+短信验证码登陆</div>
        </div>
        <div class="common" @click="findByEmail">
          <div>已绑定邮箱</div>
          <div>通过绑定邮箱重置密码</div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { register } from '@/api'
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: '',
      password: '',
      show: false
    }
  },

  methods: {
    async login() {
      if (!this.checked) {
        this.$emit('isChecked')
        return false
      }
      const formList = this.validate()
      if (formList) {
        this.$store.dispatch('login', formList)
      }
    },
    async register() {
      if (!this.checked) {
        this.$emit('isChecked')
        return false
      }
      const formList = this.validate()
      if (formList) {
        const { data } = await register(formList)
        console.log(data)
        if (data.meta.status !== 200) return this.$toast(data.meta.msg)
        this.clearFormData()
      }
    },
    // 表单验证
    validate() {
      const formList = {}
      formList.password = this.password
      const regP = /^1(3|5|8)[0-9]{9}$/
      const regF =
        /^(([_\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([_\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?))$/
      if (regP.test(this.id)) {
        formList.phone = this.id
        return formList
      } else if (regF.test(this.id)) {
        formList.email = this.id
        return formList
      } else {
        this.$toast('用户名或密码格式错误')
        return false
      }
    },
    // 格式化表单数据
    clearFormData() {
      this.id = ''
      this.password = ''
    },
    findByPhone() {
      this.show = false
      this.$emit('findByPhone')
    },
    findByEmail() {
      this.show = false
      this.$router.push('/findPwdByEmail')
    }
  }
}
</script>

<style lang="less" scoped>
.click {
  display: flex;
  .van-button:nth-child(1) {
    margin-right: 8px;
  }
  .van-button:nth-child(2) {
    margin-left: 8px;
  }
}
.deep_btn ::v-deep .van-button--default {
  border: transparent;
  color: #fb7299;
}
.van-action-sheet {
  > div {
    padding: 0 16px;
    font-size: 16px;
    .common {
      padding-top: 10px;
      div:nth-child(2) {
        color: #5f6368;
        font-size: 12px;
        padding-top: 5px;
      }
    }
  }
}
</style>
