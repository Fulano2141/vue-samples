<template>
  <div class="component">
    <h3>Yo may view the user detail here</h3>
    <p>Many details</p>
    <p>User Name: {{switchName()}}</p>
    <p>User Age: {{ userAge }}</p>
    <!-- <button @click="resetName">Reset Name</button> -->
    <button @click="resetFn">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  props: {
    // myName: [String, Array], // force myName to String or Array
    myName: {
      type: String,
      //   required: true, //THIS
      // OR
      //   default: 'Fhulano' // THIS
      // OR
      default: function () {
        return {
          name: "Fhulano",
        };
      },
    },
    userAge: Number,
    resetFn: Function,
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = "Fulano"; // On User will be with other value
      this.$emit("nameWasReset", this.myName);
    },
  },
  created() {
    eventBus.$on("ageWasEdited", (data) => {
      this.userAge = data;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
}
</style>