<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>

import Home from './view/home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

* {
  box-sizing: border-box;
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
</style>
