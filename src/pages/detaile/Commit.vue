<template>
  <div class="main">
    <div class="commit" v-for="(item, index) in servecommit" :key="index">
      <div class="commit_item">
        <div class="left">
          <img v-if="item.image" :src="item.image" alt="" />
          <img v-else src="/img/common/noface.jpg" alt="" />
        </div>
        <div class="right">
          <div class="name">
            <span v-if="item.user_name">{{ item.user_name }}</span>
            <span v-else>此用户匿名</span>
          </div>
          <div class="date">{{ item.commit_data }}</div>
          <div class="title">
            {{ item.commit_content }}<br /><span class="reply" @click="replyCommot(item.commit_id)">回复</span>
          </div>
        </div>
      </div>
      <commit-item :itemdata="item.child" @postchild="replyCommot" class="child" />
    </div>
  </div>
</template>

<script>
import CommitItem from './CommitItem.vue'
export default {
  components: { CommitItem },
  props: {
    servecommit: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    replyCommot(res) {
      this.$emit('replyCommot', res)
    }
  }
}
</script>

<style scoped>
.commit {
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e8ef;
}
.reply {
  position: absolute;
  right: 10px;
  color: red;
}
.commit_item {
  display: flex;
  /* box-sizing: border-box; */

  padding: 10px;
}
.child {
  padding-left: 20px;
}
.left {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
}
.left img {
  width: 100%;
  height: 100%;
}
.right {
  flex: 1;
  padding-left: 5px;
}
.title {
  position: relative;
  font-size: 14px;
}
.name {
  color: #727272;
}
.date {
  font-size: 12px;
  color: #b0bac0;
}
</style>
