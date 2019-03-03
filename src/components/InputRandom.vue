<template>
  <button
    class="input-random"
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
.input-random {
  display: block;
  width: 100%;
  color: var(--active-color);
  border: 2px solid var(--active-color);
  border-radius: 3px;
  background: transparent;
  transition: background .5s;
}

.input-random:hover {
  background: var(--active-light-color);
}
</style>
