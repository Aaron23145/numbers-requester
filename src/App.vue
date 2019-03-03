<template>
  <div>
    <TheTypeSelector />
    <TheMainContainer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TheTypeSelector from './components/TheTypeSelector'
import TheMainContainer from './components/TheMainContainer'

export default {
  name: 'App',
  components: {
    TheTypeSelector,
    TheMainContainer
  },
  computed: mapGetters([
    'requestTypeSelected'
  ]),
  watch: {
    requestTypeSelected (newType) {
      // this.$el.style.setProperty('--active-color', 'var(--main-blue)')
      switch (newType) {
        case 'trivia':
          this.$el.style.setProperty('--active-color', 'var(--main-dark-red)')
          this.$el.style.setProperty('--active-light-color', 'var(--main-red)')
          break
        case 'year':
          this.$el.style.setProperty('--active-color', 'var(--main-dark-blue)')
          this.$el.style.setProperty('--active-light-color', 'var(--main-blue)')
          break
        case 'date':
          this.$el.style.setProperty('--active-color', 'var(--main-dark-green)')
          this.$el.style.setProperty('--active-light-color', 'var(--main-green)')
          break
        case 'math':
          this.$el.style.setProperty('--active-color', 'var(--main-dark-yellow)')
          this.$el.style.setProperty('--active-light-color', 'var(--main-yellow)')
          break
      }
    }
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
</style>
