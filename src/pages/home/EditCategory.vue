<template>
  <div class="category">
    <div class="back" @click="backClick">返回</div>
    <div class="item1">
      <div v-for="(item, index) in category" :key="index" @click="removeCat(index)">
        {{ item.title }}
      </div>
    </div>
    <div class="item2">
      <div v-for="(item, index) in removecategory" :key="index" @click="addCat(index)">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
  data() {
    return {
      removecategory: []
    }
  },
  methods: {
    removeCat(index) {
      if (this.category.length > 3) {
        this.removecategory.push(this.category[index])
        this.category.splice(index, 1)
        localStorage.setItem('removeCat', JSON.stringify(this.removecategory))
      } else {
        this.$toast.show('至少保留三个项目', 2000)
      }
    },
    addCat(index) {
      this.category.push(this.category[index])
      this.removecategory.splice(index, 1)
      localStorage.setItem('removeCat', JSON.stringify(this.removecategory))
    },
    backClick() {
      this.$emit('backClick')
    }
  },
  created() {
    if (localStorage.getItem('removeCat')) {
      this.removecategory = JSON.parse(localStorage.getItem('removeCat'))
    }
  }
}
</script>

<style scoped>
.item1,
.item2 {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  text-align: center;
}
.item1 {
  border-bottom: 1px solid black;
}
.item1 div,
.item2 div {
  width: 30vw;
  height: 35px;
  line-height: 35px;
  border: 1px solid #fb759b;
  border-radius: 5px;
  margin: 10px 7px 10px 0;
  color: #b78989;
}
</style>
