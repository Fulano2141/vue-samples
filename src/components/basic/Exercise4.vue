
<template>
  <div>
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <hr />
    <div>
      <button @click="startEffect">Start Effect</button>
      <div id="effect" v-bind:class="effectClasses"></div>
    </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <hr />
    <div
      v-bind:class="[float, 'blue', 'text-color']"
    >Create a couple of CSS classes and attach them via the array syntax</div>
    <hr />
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <hr />
    <div>
      <input type="text" v-model="userClass" />
      <div :class="userClass"></div>
    </div>
    <hr />
    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div>
      <input type="text" v-model="userClass" />
      <input type="text" v-model="isVisible" />
      <div v-bind:class="[{visible: isVisible}, userClass]"></div>
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div>
      <input type="text" v-model="myStyle.backgroundColor" />
      <div v-bind:style="myStyle"></div>
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
      <button v-on:click="startProgress">Start Progress</button>
      <div v-bind:class="['progress-bar']" v-bind:style="progressBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    float: "float",
    userClass: "",
    isVisible: true,
    myStyle: {
      width: "100px",
      height: "150px",
      backgroundColor: "black",
    },
    progressBar: {
      width: "0px",
      backgroundColor: "green",
    },
  }),
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function () {
      var vm = this;
      var width = 0;

      setInterval(function () {
        width = width + 10;
        vm.progressBar.width = width + "px";
      }, 500);
    },
  },
};
</script>

<style>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.highlight {
  background-color: black;
  width: 200px !important;
}
.shrink {
  background-color: gray;
  width: 50px !important;
}
.blue {
  background-color: yellow;
}
.float {
  float: center;
}
.text-color {
  color: blue;
}
.visible {
  width: 100px;
  height: 50px;
}
.progress-bar {
  width: 200px;
  height: 20px;
  border: 1px solid black;
}
</style>