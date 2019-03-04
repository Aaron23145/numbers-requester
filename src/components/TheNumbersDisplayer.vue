<template>
  <div class="the-numbers-displayer">
    <p v-if="recordSelected !== false">
      {{ recordSelectedMsg }}
    </p>
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
      'recordSelectedMsg'
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
