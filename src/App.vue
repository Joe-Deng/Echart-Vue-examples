<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Bar</router-link> |
      <router-link to="/line">Line</router-link> |
      <router-link to="/scatter">Scatter</router-link> |
      <router-link to="/pie">Pie</router-link> |
      <router-link to="/map">Map</router-link> |
      <router-link to="/radar">Radar</router-link> |
      <router-link to="/gauge">Gauge</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
