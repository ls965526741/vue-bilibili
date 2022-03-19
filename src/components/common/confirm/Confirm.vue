<template>
  <div class="toast" v-if="isShow">
    <div class="content">{{ message }}123</div>
    <button @click="button1" class="button">取消</button>
    <button @click="button2" class="button">确认</button>
  </div>
</template>
<script>
export default {
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
      isShow: false,
      current: 0
    }
  },
  methods: {
    async myconfirm(show, message) {
      this.message = message
      this.isShow = show
    },
    button1() {
      this.current = 1
      console.log(this.current)
    },
    button2() {
      this.current = 2
      console.log(this.current)
    }
    // show(res, outTime = 2000) {
    //   this.message = res;
    //   this.isShow = true;
    //   setTimeout(() => {
    //     this.isShow = false;
    //     this.message = "";
    //   }, outTime);
    // },
    // watch: {
    //   current,
    // },
  }
}
</script>
<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 250px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #fb789d;
  border-radius: 40px;
  z-index: 999;
  text-align: center;
  padding-top: 40px;
}
.button {
  display: block;
  width: 50px;
  height: 30px;
  outline: none;
  border: none;
}
</style>
