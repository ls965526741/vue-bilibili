<template>
  <div class="main">
    <div class="male" @click="genderclick1">男</div>
    <div class="female" @click="genderclick2">女</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: ''
    }
  },
  methods: {
    genderclick1() {
      this.$emit('genderChange', 1)
    },
    genderclick2() {
      this.$emit('genderChange', 0)
    }
  }
}
</script>

<style scoped>
.main {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  animation: move 0.2s linear;
  font-size: 20px;
}
.main div {
  flex: 1;
}
.male {
  color: blue;
}
.female {
  color: pink;
}
@keyframes move {
  from {
    height: 0;
  }
  to {
    height: 100px;
  }
}
</style>
