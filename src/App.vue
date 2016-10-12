<template>
  <div id="app" class="mainholder">

      <menu-bar></menu-bar>
      <navigation-bar></navigation-bar>

      <router-view></router-view>

  </div>
</template>

<script>

import NavigationBar from './components/NavigationBar.vue'
import MenuBar from './components/MenuBar.vue'


export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }

  , components: {
      MenuBar
      , NavigationBar
  }
}
</script>

<style>
.mainholder {
    display: flex;
    flex-flow: column;
}
</style>
