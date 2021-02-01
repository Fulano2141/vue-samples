<template>
  <div>
    <div id="app">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({}),
};
</script>

<style>
</style>
