<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  listeners: () => {
    groupActionListener: (event) => {
      data.myValue += 2;
    }
  }
};
</script>
<style>
</style>
