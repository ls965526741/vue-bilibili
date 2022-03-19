<template>
  <div>
    <div class="item">
      <div class="left">{{ left }}</div>
      <div class="right">
        <slot name="right">{{ right }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: String,
    right: String
  }
}
</script>

<style scoped>
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.left,
.right {
  padding: 10px;
}
</style>
