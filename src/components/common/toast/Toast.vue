<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  // props: {
  //   message: {
  //     type: String,
  //     default: "",
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(res, outTime = 2000) {
      this.message = res
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, outTime)
    }
  }
}
</script>
<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 999;
}
.toast span {
  padding: 8px;
  line-height: 200%;
}
</style>
