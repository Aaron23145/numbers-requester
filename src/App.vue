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
</style>
