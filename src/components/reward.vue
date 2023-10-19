<template>
  <div class="reward">
    <div class="reward-item" v-for="(reward, index) in rewardBg" :key="index">
      <div class="reward-top">
        <div class="reward-bg" :style="{backgroundImage:'url('+reward.icon+')'}"></div>
      </div>
      <div class="button" @click="handleRewardClick(reward)"> <div class="icon-star"></div> X{{ reward.price }} 兑换</div>
    </div>
  </div>
</template>

<script>
import { getReward } from '@/server'
export default {
  name: 'EducateReward',

  data() {
    return {
      rewardBg: [
        { icon: require('../assets/reward-1.jpeg'), price: 10, name: '礼物' },
        { icon: require('../assets/reward-2.jpeg'), price: 10, name: '星星瓶'},
        { icon: require('../assets/reward-3.png'), price: 10, name: '雪糕' },
        { icon: require('../assets/reward-4.jpeg'), price: 10, name: '糖果' },
        { icon: require('../assets/reward-5.png'), price: 10, name: '仙女棒' },
        { icon: require('../assets/reward-6.jpeg'), price: 10, name: '糖果枪' },
        { icon: require('../assets/reward-7.jpeg'), price: 10, name: '奶茶' },
        { icon: require('../assets/reward-8.jpeg'), price: 10, name: '蜡烛' },
        { icon: require('../assets/diamond.png'), price: 10, diamond: 1, name: '钻石' },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    handleRewardClick(reward) {
      const res = confirm("是否兑换？")
      
      if (res) {
        getReward(reward)
        .then(res => {
          return res.json()
        }).then(res => {
          alert(res.msg)
          if (res.code === 1) {
            this.$emit('onReward')
          }
        })
      }
    }
  },
};
</script>

<style  scoped>
.reward {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
  height: 100%;
  padding: 10px;
}
.reward::after {
  content: '';
  display: block;
  flex: auto;
}
.reward-item {
  width: 14rem;
  height: 19rem;
  border: 0.4rem solid #feaf1a70;
  border-radius: 0.6rem;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
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
.reward-top {
  height: 225px;
  padding-bottom: 10px;
}
img {
  max-width: 100%;
}
.reward-bg {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.icon-star {
  width: 32px;
  height: 32px;
  background-image: url('../assets/star.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>