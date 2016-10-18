<template>
  <div id="app" class="appcontainer">

      <menu-bar class="menucontainer"></menu-bar>

      <div class="navroutercontainer">
          <navigation-bar class="navcontainer"></navigation-bar>
          <router-view class="routercontainer"></router-view>
      </div>

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
.appcontainer {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
}

.menucontainer {
    width: 15vw;
    height: 100vh;
    padding-left: 5px;
    padding-right: 10px;
}

.navroutercontainer {
    width: 85vw;
    height: 100vh;
}

.navcontainer {
    width: inherit;
    height: 7%;
}

.routercontainer {
    width: inherit;
    height: 93%;
}


</style>
