<template>
  <div class="content">
    <div class="content-item" v-for="(task, index) in data.taskList" :key="index">
      <div class="content-flex-head">
        <div class="flex align-center" style="width: 90%;;">
          <div class="icon-task"></div>
          <div class="content-text">{{ task.taskName }}</div>
        </div>
        <div  class="flex align-center">
          <button @click="handleTaskDelete(task.id)" v-if="isAdmin">删除</button>
          <button @click="handleTaskDone(task.id)" v-if="isAdmin">完成</button>
          <div>{{ task.isDone ? '1' : '0' }}/1</div>
          <div style="margin-left: 10px;" class="icon-star"></div>X{{ task.star }}
        </div>
      </div>
    </div>

    <div class="not-task" v-if="data.taskList.length <= 0">暂无任务</div>

  </div>
</template>

<script>
import { taskDone, taskDelete } from '@/server'
export default {
  name: 'EducateTask',

  props: ['data'],

  data() {
    return {
      taskList: [],
      isAdmin: location.search.substr(1) === 'admin'
    };
  },

  mounted() {
  },

  methods: {
    handleTaskDone(id) {
      taskDone(id)
      .then(res => res.json())
      .then(res => {
        alert(res.msg)
        this.$emit('update')
      })
    },

    handleTaskDelete(id) {
      taskDelete(id)
      .then(res => res.json())
      .then(() => {
        this.$emit('update')
      })
    },
  },
};
</script>

<style scoped>

.content {
  padding: 10px;
  height: 100%;
  overflow-y: auto;
}
.content-item {
  width: 100%;
  background-color:#fff;
  border: 3px solid #f8ba4357;
  border-radius: 60px;
  line-height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  color: rgb(73 66 66 / 87%);
  margin-bottom: 20px;
}
.content-item:last-child {
  margin-bottom: 0;
}
.icon-task {
  background-image: url("../assets/task.png");
  width: 35px;
  height: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  margin-top: 1px;
}
.content-text {
  margin-left: 10px;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.content-flex-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.not-task {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  color: #5c5c5cb3;
}

.icon-star {
  width: 32px;
  height: 32px;
  background-image: url('../assets/star.png');
  background-repeat: no-repeat;
  background-size: contain;
}
button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 10px;
}
</style>