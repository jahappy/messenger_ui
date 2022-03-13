<template>
  <div id="wrapper">
    <Sidebar/>
    <Content/>
<!--    <router-link to="/"> 1페이지로 </router-link>-->
<!--  <router-link to="/about"> 2페이지로 </router-link>-->
<!--  <router-view/>-->

</div>
</template>

<script>
import Sidebar from './views/layout/sidebar';
import Content from './views/layout/content';

export default {
  name: 'App',
  components: {
    Sidebar,
    Content,
  },
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