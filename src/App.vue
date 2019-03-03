<template>
  <div>
    <TheTypeSelector />
    <TheMainContainer />
  </div>
</template>

<script>
import TheTypeSelector from './components/TheTypeSelector'
import TheMainContainer from './components/TheMainContainer'

export default {
  name: 'App',
  components: {
    TheTypeSelector,
    TheMainContainer
  }
}
</script>

<style lang="scss">
:root {
  --main-red: rgb(255, 108, 101);
  --main-dark-red: #570c30;
  --main-blue: rgb(92, 178, 253);
  --main-dark-blue: #000f1f;
  --main-green: rgb(137, 255, 188);
  --main-dark-green: rgb(33, 83, 61);
  --main-yellow: rgb(255, 237, 117);
  --main-dark-yellow: rgb(102, 88, 0);
  --active-color: var(--main-dark-red);
  --active-light-color: var(--main-red);
}

body {
  color: var(--active-color);
}
</style>
