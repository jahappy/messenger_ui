<template>
  <div id="app">
  <router-link to="/"> 1페이지로 </router-link>
  <router-link to="/about"> 2페이지로 </router-link>
  <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',
  created() {
    window.$_app = this;
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>