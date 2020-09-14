<template>
  <div>
    <ul>
      <li v-for="(ingredient, i) in ingredients" :key="i">{{ingredient}}{{(i)}}</li>
    </ul>
    <template v-for="(ingredient, i) in ingredients">
      <h1 :key="i+10">{{ingredient}}</h1>

      <p :key="i">{{i}}</p>
    </template>
    <hr />
    <button @click="ingredients.push('spices')">Add ingredient</button>

    <ul>
      <li v-for="(person, i) in persons" :key="i">
        <div v-for="(value, key, index) in person" :key="index">{{key}}:{{value}} - ({{index}})</div>
      </li>
    </ul>
    <span v-for="(n, key) in 10" :key="key">{{n}},</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    ingredients: ["meat", "fruit", "cookies"],
    persons: [
      { name: "Max", age: 27, color: "red" },
      { name: "Anna", age: "unknown", color: "blue" },
    ],
  }),
};
</script>

<style>
</style>