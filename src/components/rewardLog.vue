<template>
  <div class="log">
    <div class="item" v-for="log in logs" :key="log.time">在{{ dayjs(log.time).format('YYYY-MM-DD HH:mm:ss') }} 兑换了 {{ log.name }}</div>
    <div class="not-log" v-if="logs.length <= 0">暂无记录</div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { getLog } from '@/server'

export default {
  name: 'EducateRewardLog',

  data() {
    return {
      logs: []
    };
  },

  mounted() {
    this.getData()
  },

  methods: {
    dayjs,
    getData() {
      getLog()
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.logs = res.log
      })
    }
  },
};
</script>

<style scoped>
.item {
  margin-bottom: 20px;
  padding-left: 10px;
  color: #8c7c7cdb;
  font-size: 18px;
}
.log {
  overflow-y: auto;
  height: 100%;
}
.not-log {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  color: #5c5c5cb3;
}
</style>