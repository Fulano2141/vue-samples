<template>
  <!-- // https://vuejs.org/v2/guide/custom-directive.html -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
        <!-- Be careful using v-html. This can compile HTML code -->
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!-- global on Main.js -->
        <p v-highl>Color this</p>
        [1]
        <p v-highli="'green'">Color this</p>
        [2]
        <p v-highlig:backgro="'blue'">Color this</p>
        [3]
        <p v-highligh:backgro.delayed="'red'">Color this</p>
        [4]
        <!-- local -->
        <p v-local-highlight:backgro.delayed="'red'">Color this</p>
        [5]
        <p v-local-highlight:backgro.delayed.blink="'red'">Color this</p>
        [6]
        <p
          v-local-highli:backgro.delayed.blink="{
            mainColor: 'red',
            secondColor: 'green',
            delay: 500,
          }"
        >
          Color this
        </p>
        [7]
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "blue";
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "backgro") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "backgro") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        } // [5] [6]
      },
    },
    "local-highli": {
      bind(el, binding) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "backgro") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "backgro") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        } // [7]
      },
    },
  },
};
</script>

<style>
</style>