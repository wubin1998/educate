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

    <div class="flex btn-box">
      <div class="button" @click="handleCreateTask">确定创建</div>
      <div class="button" @click="handleSaveTask">保存任务</div>
    </div>
    

    <div class="save-box">
      <div class="save-item" v-for="d in saveTask" :key="d.id" @click="checkSaveItem(d)">
        <div style="margin-right: 10px;">{{ d.taskName }}</div>
        <div class="flex al"><div class="icon-star"></div> X{{ d.star }} <span @click="handleSaveDelete(d)">&nbsp;&nbsp;删除</span></div>
      </div>
    </div>

    <div>
      <div>设置</div>
      
      <div class="flex al">

        <div class="flex al">
          <div class="icon-star"></div>
          <input type="number" v-model="currentStar" class="input" id="currentStar">
        </div>
        <div class="flex al">
          <div class="icon-star diamond"></div>
          <input type="number" v-model="currentDiamond" class="input" id="currentDiamond">
        </div>
      </div>

      <div class="button" style="margin-top: 20px;" @click="handleSaveSetting">保存设置</div>
    </div>
  </div>
</template>

<script>
import { taskNew, taskSave, getData, taskSaveDelete, saveSetting } from '@/server'
export default {
  name: 'EducateCreateTask',

  data() {
    return {
      taskName: '',
      star: 1,
      saveTask: [],
      currentStar: 0,
      currentDiamond: 0,
    };
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      getData()
      .then(res => res.json())
      .then(res => {
        const { saveTask, star, diamond } = res
        this.saveTask = saveTask
        this.currentStar = star
        this.currentDiamond = diamond
      })
    },

    handleCreateTask() {
      taskNew(JSON.stringify({ taskName: this.taskName, star: this.star }))
      .then(res => {
        return res.json()
      }).then(res => {
        alert(res.msg)
        this.taskName = ''
        this.star = 1
      })
    },

    checkSaveItem(save) {
      this.taskName = save.taskName
      this.star = save.star
    },

    handleSaveDelete({ id }) {
      taskSaveDelete(id)
      .then(res => res.json())
      .then(() => {
        this.getData()
        this.taskName = ''
        this.star = 1
      })
    },

    handleSaveTask() {
      taskSave(JSON.stringify({ taskName: this.taskName, star: this.star }))
      .then(res => {
        return res.json()
      }).then(res => {
        alert(res.msg)
        this.getData()
        this.taskName = ''
        this.star = 1
      })
    },

    handleSaveSetting() {
      saveSetting(JSON.stringify({
        star: this.currentStar,
        diamond: this.currentDiamond
      }))
      .then(res => {
        return res.json()
      }).then(res => {
        alert(res.msg)
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
.flex {
  display: flex;
}
.al {
  align-items: center;
}
.btn-box {
  width: 25%;
  margin: 0 auto;
}
.save-item {
  font-size: 16px;
  border: 2px solid #fed917;
  padding: 12px;
  border-radius: 7px;
  display: flex;
  width: max-content;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
}
.save-box {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>