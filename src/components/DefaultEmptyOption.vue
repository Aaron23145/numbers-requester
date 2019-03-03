<template>
  <option
    value
    disabled
    selected
  >
    {{ emptyOptionText }}
  </option>
</template>

<script>
export default {
  name: 'DefaultEmptyOption',
  props: {
    emptyOptionText: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
