<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>课节</td>
          <td :class="{'current': day === 1}">星期一</td>
          <td :class="{'current': day === 2}">星期二</td>
          <td :class="{'current': day === 3}">星期三</td>
          <td :class="{'current': day === 4}">星期四</td>
          <td :class="{'current': day === 5}">星期五</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>第一节</td>
          <td>升旗仪式</td>
          <td>英语早读</td>
          <td>语文早读</td>
          <td>英语早读</td>
          <td>语文早读</td>
        </tr>
        <tr>
          <td>第二节</td>
          <td>班会</td>
          <td>数学</td>
          <td>语文</td>
          <td>数学</td>
          <td>语文</td>
        </tr>
        <tr>
          <td>第三节</td>
          <td>语文</td>
          <td>语文</td>
          <td>数学</td>
          <td>美术</td>
          <td>数学</td>
        </tr>
        <tr>
          <td>第四节</td>
          <td>体活</td>
          <td>英语</td>
          <td>音乐</td>
          <td>语文</td>
          <td>英语</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>第五节</td>
          <td>音乐</td>
          <td>科学</td>
          <td>综合</td>
          <td>体育</td>
          <td>语文</td>
        </tr>
        <tr>
          <td>第六节</td>
          <td>道法</td>
          <td>体育</td>
          <td>英语</td>
          <td>语文</td>
          <td>美术</td>
        </tr>
        <tr>
          <td>第七节</td>
          <td>体育</td>
          <td>语文</td>
          <td>书法</td>
          <td>英语</td>
          <td>道法</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'EducateTimetable',

  data() {
    return {
      day: dayjs().day()
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

table td {
  padding: 20px;
  border: 1px solid #03a9f4;
  font-size: 28px;
}

td.current {
  background-color: #03a9f4;
}
</style>