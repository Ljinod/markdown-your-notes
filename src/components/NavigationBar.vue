<template lang="html">
    <div class="navigationbar">

        <router-link :to="{name: 'note'}" tag="button"
                      class="nav-item">New note</router-link>
        <button type="button" name="History"
                class="nav-item">History</button>
        <div class="nav-item search">
            <input type="search" placeholder="Search a note…" class="search" />
        </div>

    </div>
</template>

<style lang="css">
.navigationbar {
    display: flex;
    align-items: center;
}

.nav-item {
    margin: 0 10px;
}

.search {
    flex-grow: 1;
    width: 50%;
}

</style>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>
