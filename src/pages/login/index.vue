<template>
  <div>
    <div class="header">
      <i @click="$router.push('/profile')" class="iconfont icon-arrow-left-bold"></i>
      <div class="title">
        <span v-if="currentIndex !== 2">手机号登陆注册</span>
        <span v-if="currentIndex !== 1">密码登陆</span>
      </div>
      <div class="right">
        <div v-if="currentIndex !== 1" @click="currentIndex = 1">短信登陆</div>
        <div v-if="currentIndex !== 2" @click="currentIndex = 2">密码登陆</div>
      </div>
    </div>
    <div class="banner"></div>
    <Login :checked="checked" @findByPhone="currentIndex = 1" @isChecked="isChecked" v-if="currentIndex === 2" />
    <Code :checked="checked" @isChecked="isShow = true" v-if="currentIndex === 1" />
    <div>
      <van-popover v-model="isShow" @popover-action-font-size="44" :actions="actions" placement="top-start">
        <template #reference>
          <van-checkbox v-model="checked" icon-size="14px" checked-color="#fb7299" shape="square"
            ><span>我已阅读并同意</span><span>用户协议</span><span>和</span><span>隐私政策</span
            ><span v-if="currentIndex === 1">,未注册绑定的手机号验证成功后会自动注册</span></van-checkbox
          >
        </template>
      </van-popover>
    </div>
    <div class="footer">
      <div>遇到问题？<span>查看帮助</span></div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import Code from './Code.vue'
export default {
  components: {
    Login,
    Code
  },
  data() {
    return {
      currentIndex: 2,
      checked: false,
      titleColor: '',
      userInfo: {},
      formData: {},
      isShow: false,
      actions: [{ text: '请先勾选同意' }]
    }
  },
  methods: {
    isChecked() {
      this.isShow = true
      let timer = null
      if (timer) clearTimeout(timer)
      ;(() => {
        timer = setTimeout(() => {
          this.isShow = false
        }, 3000)
      })()
    }
  }
}
</script>

<style lang="less" scoped>
.option {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  a {
    padding-top: 10px;
  }
}
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  i {
    padding: 0 16px;
    color: @defaultColor;
    font-size: 22px;
  }
  .title {
    flex: 1;
  }
  .right {
    padding-right: 10px;
    color: @defaultColor;
    font-size: 12px;
  }
}
.banner {
  width: 100%;
  height: 24vw;
  background: url('/static/img/bannerTop_new.png');
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
}
.van-checkbox {
  padding: 0 16px;
  font-size: 12px;
  span:nth-child(2n) {
    color: #1389bf;
  }
}
.footer {
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  div {
    color: @defaultColor;
    span {
      color: #1389bf;
    }
  }
}
</style>
