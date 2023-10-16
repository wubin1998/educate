<template>
  <div class="createTask">
    <div class="title">添加每日任务</div>

    <div>
      <input class="input" type="text" v-model="taskName">
    </div>

    <div class="f">
      奖励<div class="icon-star"></div> 
    </div>

    <div>
      <input style="width:10%" v-model="star" class="input" type="number">
    </div>

    <div class="button" @click="handleCreateTask">确定创建</div>
  </div>
</template>

<script>
export default {
  name: 'EducateCreateTask',

  data() {
    return {
      taskName: '',
      star: 1
    };
  },

  mounted() {
    
  },

  methods: {
    handleCreateTask() {
      fetch("http://localhost:3000/task/new", {
        method: 'post',
        body: JSON.stringify({ taskName: this.taskName, star: this.star }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res.json()
      }).then(res => {
        alert(res.msg)
        this.taskName = ''
        this.star = 1
      })
    }
  },
};
</script>

<style  scoped>
.title {
  font-size: 20px;
}
.createTask {
  padding: 10px;
}
.input {
  border: 0;
  outline: none;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
}
.icon-star {
  width: 32px;
  height: 32px;
  background-image: url('../assets/star.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.f {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.button {
  background-image: url('../assets/btn-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 9rem;
  height: 48px;
  color: #fff;
  text-align: center;
  line-height: 48px;
  margin: 0 auto;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>