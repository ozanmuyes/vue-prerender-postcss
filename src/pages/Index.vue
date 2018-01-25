<template>
  <div :class="$style.container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    // NOTE Actually there is no need to set 'name' of a page.
    //      But if we were to set it it would be 'IndexPage'.
    data() {
      return {
        title: 'foo',
        //
      };
    },
  };
</script>

<style lang="postcss" module>
  :root {
    font-size: 16px;
  }

  .verticallyCentered {
    /**/
    /*color: red;*/
    color: rebeccapurple;
    ali: 1px;
  }

  .horizontallyCentered {
    /**/
  }

  .container {
    /* NOTE Here, we writing composings first */
    composes: verticallyCentered;
    composes: horizontallyCentered;

    padding: 2rem;
  }
</style>
