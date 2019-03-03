<template>
  <div class="the-numbers-displayer">
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
.the-numbers-displayer {
  padding: 20px 0;
  color: var(--active-color);
}
</style>
