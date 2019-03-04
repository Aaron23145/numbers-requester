<template>
  <div class="the-numbers-displayer">
    <transition
      name="record-message"
      mode="out-in"
    >
      <p
        v-if="recordSelected !== false"
        :key="Math.random()"
      >
        {{ recordSelectedMsg }}
      </p>
      <p
        v-else-if="requestError"
        :key="Math.random()"
        class="error"
      >
        {{ requestError }}
      </p>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TheNumbersDisplayer',
  computed: {
    ...mapState([
      'recordSelected',
      'requestError'
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
  text-align: center;
}

.record-message-enter-active,
.record-message-leave-active {
  transition: transform .5s, opacity .5s;
}

.record-message-enter,
.record-message-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}

.error {
  color: red;
}
</style>
