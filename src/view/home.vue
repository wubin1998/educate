<template>
  <div>
    <div class="header">
      <div class="star-box">
        <div class="icon-star"></div>
        <div>{{ star }}</div>
      </div>

      <div class="star-box">
        <div class="icon-star diamond"></div>
        <div>{{ diamond }}</div>
      </div>
    </div>
    <div class="box">

      <div class="left-menu">
        <div 
          @click="menusActive = menu.code"
          class="left-menu-item" 
          :class="{'active': menusActive === menu.code}" 
          v-for="menu in menus" :key="menu.code">{{ menu.name }}</div>
      </div>

      <Task v-if="menusActive === 2" @update="getData" :data="data"></Task>
      <Reward v-if="menusActive === 3" @onReward="getData"></Reward>
      <CreateTask v-if="menusActive === 4"></CreateTask>
      <RewardLog v-if="menusActive === 5"></RewardLog>
    </div>
  </div>
</template>

<script>
import Task from '../components/task'
import CreateTask from '../components/createTask.vue'
import Reward from '../components/reward'
import RewardLog from '@/components/rewardLog.vue';

export default {
  name: 'EducateHome',

  data() {
    const isAdmin = location.search.substr(1) === 'admin'
    let menus = [
      { name: '课程表', code: 1 },
      { name: '每日任务', code: 2 },
      { name: '兑换奖励', code: 3 },
      { name: '兑换记录', code: 5 },
    ]

    if (isAdmin) {
      menus = [
        ...menus,
        { name: '添加任务', code: 4 },
      ]
    }

    return {
      isAdmin,
      star: 0,
      diamond: 0,
      menusActive: 5,
      menus,
      data: { taskList: [] }
    };
  },

  components: {
    Task,
    Reward,
    CreateTask,
    RewardLog
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      fetch('/data').then(res => {
        return res.json()
      }).then(res => {
        const { star, diamond } = res;
        this.star = star,
        this.diamond = diamond
        this.data = res;
      })

      setTimeout(() => {
        this.getData()
      }, 5000);
    }
  },
};
</script>

<style scoped>

.box {
  position: absolute;
  left: calc(50% - 3rem);
  top: calc(50% + 2rem);
  transform: translate(-50%, -50%);
  width: calc(100% - 8rem);
  height: calc(100% - 6rem);
  margin-left: 5rem;
  padding: 10px;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.left-menu {
  position: absolute;
  left: -5rem;
  top: 50%;
  transform: translateY(-50%);
  
}
.left-menu-item {
  width: 5rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  background-color: #fff;
  color: #feaf1a;
  font-size: 14px;
  transition: all .15s;
}
.left-menu-item.active {
  font-size: 18px;
  font-weight: bold;
  color: #fe9a1a;
}
.left-menu-item:first-child {
  border-top-left-radius: 0.5rem;
  box-shadow: -24px -2px 28px 0 rgba(0,0,0,.1);
}
.left-menu-item:last-child  {
  border-bottom-left-radius: 0.5rem;
  box-shadow: -24px 28px 28px 0 rgba(0,0,0,.1);
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.star-box {
  background-color: #fff;
  padding: 10px 15px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  min-width: 6rem;
  justify-content: space-between;
  font-size: 20px;
  margin-left: 20px;
}

.icon-star {
  width: 32px;
  height: 32px;
  background-image: url('../assets/star.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 15px;
}
.icon-star.diamond {
  transform: translateY(4px);
  background-image: url('../assets/diamond.png');
}
</style>