<template>
  <div>
    <serve-status v-for="server in 5" :key="server"></serve-status>
  </div>
</template>

<script>
import ServerStatus from "../components/basic/ServerStatus.vue";
export default {
  components: {
    "serve-status": ServerStatus,
  },
};
</script>

<style>
</style>