<template>
  <div>
    Server status: {{status}}
    <hr />
    <button @click="changeStatus">change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "critical",
    };
  },
  methods: {
    changeStatus() {
      this.status = "normal";
    },
  },
};
</script>

<style>
</style>