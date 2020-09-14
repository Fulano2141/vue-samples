<template>
  <div>
    <!-- <p>{{quote}}</p> -->
    <div class="title">
      <slot name="title"></slot>
      <span style="color: #ccc">
        <slot name="subtitle">The subtitle</slot>
      </span>
    </div>
    <hr />
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["quote"],
};
</script>

<style scoped>
div {
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: auto;
  text-align: center;
}
h2 {
  color: red;
}
.title {
  font-style: italic;
}
</style>