<template>
  <div id="app">
    <Home />
    <div class="full" @click="toggleFullScreen" v-if="!isFull"></div>
  </div>
</template>

<script>
import Home from './view/home'
export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      isFull: true,
    }
  },

  mounted() {
    if (navigator.wakeLock) {
      // 请求 Wake Lock 权限
      navigator.wakeLock.request("screen").then(function (wakeLock) {
        // 持续唤醒
        wakeLock.createRequest && wakeLock.createRequest();
      });

    }
  },

  methods: {
    toggleFullScreen() {
      if (this.isFull) {
        return
      }
      var doc = window.document;
      var docEl = doc.documentElement;

      var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
      } else {
        cancelFullScreen.call(doc);
      }

      this.isFull = true
    }

  }
}
</script>

<style>

* {
  box-sizing: border-box;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
}
@font-face {
  font-family: "Glossy Sheen Regular";
  src: url("./assets/fonts/Glossy\ Sheen\ Regular\ DEMO.ttf");
}

@font-face {
  font-family: "ZCOOLKuaiLe-Regular";
  src: url("./assets/fonts/ZCOOLKuaiLe-Regular.ttf");
}
html {
  width: 100%;
  height: 100%;
  font-family:  "ZCOOLKuaiLe-Regular", "Glossy Sheen Regular";
  background-size: cover;
  background-image: url("./assets/bg.png");
  background-repeat: no-repeat;
  background-color: #ffd81a;
}
.full {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
}
.icon-star {
  width: 32px;
  height: 32px;
  background-image: url('./assets/star.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.icon-star.diamond {
  transform: translateY(4px);
  background-image: url('./assets/diamond.png');
}
</style>
