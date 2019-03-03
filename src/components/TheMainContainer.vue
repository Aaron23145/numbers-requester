<template>
  <div class="root container">
    <TheNumbersDisplayer />
    <TheNumbersRequester />
    <TheNumbersHistory />
  </div>
</template>

<script>
import TheNumbersDisplayer from './TheNumbersDisplayer'
import TheNumbersRequester from './TheNumbersRequester'
import TheNumbersHistory from './TheNumbersHistory'

export default {
  name: 'TheMainContainer',
  components: {
    TheNumbersDisplayer,
    TheNumbersRequester,
    TheNumbersHistory
  }
}
</script>

<style lang="scss" scoped>
.root {
  background: yellow;
}
</style>
