<template>
  <div class="main-container container">
    <TheNumbersDisplayer />
    <TheNumbersRequester />
    <TheNumbersHistory />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

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
.main-container {
  box-shadow: 0px 10px 19px -7px black;
}
</style>
