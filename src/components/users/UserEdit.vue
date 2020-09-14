<template>
  <div class="component">
    <h3>You may edit the user here</h3>
    <p>Edit me! XD</p>
    <p>User Age: {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      //   this.$emit("ageWasEdited", this.userAge); // if you want to go child by child sending a data
      //   eventBus.$emit("ageWasEdited", this.userAge); // if you want to send data between two childs
      eventBus.changeAge(this.userAge); // centralice methods
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>