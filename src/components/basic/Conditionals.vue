<template>
  <div>
    <p v-if="show">You can see me!</p>
    <p v-else>Now you see me!</p>

    <template v-if="show">
      <h1>Head</h1>
      <p>Body</p>
      <p>From Head to here. We are a template</p>
    </template>
    <!-- v if: delete div  -->
    <!-- v show: hide div -->
    <p v-show="show">Do you also see me?</p>
    <button @click="show = !show">Switch</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>

<style>
</style>