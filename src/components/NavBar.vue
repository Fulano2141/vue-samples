<template>
  <div id="bar">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/basics">Basics</router-link> |
      <router-link to="/styles">Styles</router-link> |
      <router-link to="/exercise4">Sample 1</router-link> |
      <router-link to="/conditionals">Conditionals</router-link> |
      <router-link to="/loops">Loops</router-link> |
      <router-link to="/exercise5">Sample 2</router-link> |
      <router-link to="/game1">Game</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/animation">Animation</router-link>
      <br />
      <router-link to="/quotes">Quotes</router-link> |
      <router-link to="/project">Project</router-link> |
      <router-link to="/forms">Forms</router-link> |
      <router-link to="/directives">Directives</router-link> |
      <router-link to="/filmix">Filters And Mixins</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#bar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>