<template>
  <div class="root">
    <p v-if="requestPerformed">
      {{ lastRecordMsg }}
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TheNumbersDisplayer',
  computed: {
    ...mapState([
      'requestPerformed'
    ]),
    ...mapGetters([
      'lastRecordMsg'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
