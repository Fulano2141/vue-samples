<template>
  <div>
    <div id="app">
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <!-- <DynamicStyles /> -->
      <!-- <Exercise4 /> -->
      <!-- <Conditionals /> -->
      <!-- <Exercise5 /> -->
      <!-- <Loops /> -->
      <!-- <Game /> -->
      <!-- <server-status></server-status> -->
      <User />
    </div>
    <!-- <div id="app2">
      <HelloWorld />
    </div>-->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import DynamicStyles from "./components/DynamicStyles";
// import Exercise4 from "./components/Exercise4";
// import Conditionals from "./components/Conditionals";
// import Loops from "./components/Loops";
// import Exercise5 from "./components/Exercise5";
// import Game from "./components/Game";
import User from "./components/users/User";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // DynamicStyles,
    // Exercise4,
    // Conditionals,
    // Loops,
    // Exercise5,
    // Game,
    User,
  },
  data: () => ({
    // title: "fulano",
  }),
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
