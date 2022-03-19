<template>
  <div class="main">
    <input ref="input" type="text" class="text" placeholder="请输入评论" v-model="subcommitdata" />
    <div class="button">
      <button @click="submitCommit">评论</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subcommitdata: ''
    }
  },
  methods: {
    submitCommit() {
      if (this.subcommitdata) this.$emit('submitCommit', this.subcommitdata)
      this.subcommitdata = ''
    },
    getfocus() {
      this.$refs.input.focus()
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid black;
}
.text {
  flex: 6;
  padding-left: 20px;
  outline: none;
  border: none;
  font-size: 14px;
}
.button {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  width: 60px;
  height: 30px;
  border-radius: 20px;
  outline: none;
  background-color: pink;
  border: none;
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}
</style>
