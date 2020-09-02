<template>
  <div>
    <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button @click="isVisible = !isVisible">Toggle</button>
      <p v-if="isVisible">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="isVisible">You either see me ...</p>
      <p v-show="!isVisible">...or me</p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <div>
      <ul>
        <li v-for="(element, index) in array" :key="index">{{element}} - {{index}}</li>
      </ul>
    </div>
    <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
    <ul>
      <li v-for="(value, keyName, i) in myObject" :key="i">{{value}} - {{keyName}} - {{i}}</li>
    </ul>
    <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <ul>
      <li v-for="(value, index) in testData" :key="index">
        <template v-if="Array.isArray(value)">
          <div v-for="(element, index) in value" :key="index">{{element}}</div>
        </template>
        <template v-else>{{value}}</template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: true,
    array: ["Max", "Anna", "Chris", "Manu", "Fulano"],
    myObject: {
      title: "World of Warcraft",
      author: "Blizzard",
      sells: "a lot",
    },
    testData: {
      string: "OBJECT",
      integer: 10,
      arraydata: [1.67, 1.33, 0.98, 2.21],
      idontknow: 11.2,
    },
  }),
};
</script>

<style>
</style>