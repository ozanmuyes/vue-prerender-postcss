<template>
  <div id="app" :class="$style.app">
    <div class="foo"></div>
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
    display: flex;

    &.foo {
      display: block;
      width: 80px;
      height: 60px;
      background-color: yellow;
    }
  }
  @media (--small-viewport) {
    .app {
      background-color: red;
    }
  }
</style>
