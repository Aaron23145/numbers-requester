<template>
  <div class="test">
    <p v-if="recordSelected"></p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TheNumbersDisplayer',
  computed: {
    ...mapState([
      'recordSelected'
    ]),
    ...mapGetters([
      'recordMsg'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
