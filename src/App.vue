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
      <!-- <User /> -->
      <!-- <AppForQuote /> -->
      <!-- <AppProject /> -->
      <!-- <AppForms /> -->
      <!-- <AppDir /> -->
      <!-- <AppFil /> -->
      <AppAni />
    </div>
    <!-- <div id="app2">
      <HelloWorld />
    </div>-->
  </div>
</template>

<script>
// import HelloWorld from "./components/basic/HelloWorld.vue";
// import DynamicStyles from "./components/basic/DynamicStyles";
// import Exercise4 from "./components/basic/Exercise4";
// import Conditionals from "./components/basic/Conditionals";
// import Loops from "./components/basic/Loops";
// import Exercise5 from "./components/basic/Exercise5";
// import Game from "./components/basic/Game";
// import User from "./components/users/User";
// import AppForQuote from "./components/advanceComponents/AppForQuote";
// import AppProject from "./components/courseProject/AppProject";
// import AppDir from "./components/Directives/AppDir";
// import AppFil from "./components/FiltersAndMixins/AppFil";
import AppAni from "./components/Animations/AppAni";
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
    // User,
    // AppForQuote,
    // AppProject,
    // AppForms,
    // AppDir,
    // AppFil,
    AppAni,
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
