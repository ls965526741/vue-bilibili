<template>
  <div class="main">
    <div class="commit" v-for="(item, index) in itemdata" :key="index">
      <div class="commit-item">
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
          <div>
            <div v-if="!temp" class="title">
              {{ item.commit_content }}<br /><span class="reply" @click="replyCommot(item.commit_id)">回复</span>
            </div>
            <div v-else class="title">
              回复@{{ item.reply_name }}:{{ item.commit_content }}<br /><span
                class="reply"
                @click="replyCommot(item.commit_id)"
                >回复</span
              >
            </div>
          </div>
        </div>
      </div>
      <commitchild-item :itemdata="item.child" :temp="true" @postchild="postchild"></commitchild-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commitchildItem',
  props: {
    itemdata: {
      type: Array,
      default() {
        return []
      }
    },
    temp: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    replyCommot(res) {
      this.$emit('postchild', res)
    },
    postchild(res) {
      this.replyCommot(res)
    }
  }
}
</script>

<style scoped>
.commit-item {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e8ef;
  padding: 10px;
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
  font-size: 14px;
  color: #727272;
}
.name {
  color: #727272;
}
.date {
  font-size: 12px;
  color: #b0bac0;
}
.reply {
  position: absolute;
  right: 10px;
  color: red;
}
</style>
