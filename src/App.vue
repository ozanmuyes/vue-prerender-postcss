<template>
  <div id="app" :class="$style.app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="postcss" module>
  /* @custom-media --small-viewport (max-width: 426px); */

  .app {
    background-color: #ccc;
  }
  @media (--small-viewport) {
    .app {
      background-color: red;
    }
  }
</style>
