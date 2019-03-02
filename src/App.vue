<template>
  <div>
    <TheNumbersDisplayer />
    <TheNumbersRequester />
    <TheNumbersHistory />
  </div>
</template>

<script>
import TheNumbersRequester from './components/TheNumbersRequester'
import TheNumbersDisplayer from './components/TheNumbersDisplayer'
import TheNumbersHistory from './components/TheNumbersHistory'

export default {
  name: 'App',
  components: {
    TheNumbersRequester,
    TheNumbersDisplayer,
    TheNumbersHistory
  }
}
</script>

<style lang="scss">
</style>
