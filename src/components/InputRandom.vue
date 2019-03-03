<template>
  <button
    class="root"
    v-on="buttonListeners"
  >
    <slot>Random</slot>
  </button>
</template>

<script>
export default {
  name: 'InputRandom',
  computed: {
    buttonListeners () {
      return Object.assign({}, this.$listeners, { input () {
        this.$emit('click')
      } })
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  display: block;
  width: 100%;
}
</style>
