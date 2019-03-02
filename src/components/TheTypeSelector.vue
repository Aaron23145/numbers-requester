<template>
  <label>
    <slot>Type:</slot>
    <select v-model="typeSelected">
      <option
        value
        disabled
        selected
      />
      <option value="trivia">Trivia</option>
      <option value="year">Year</option>
      <option value="date">Date</option>
      <option value="math">Math</option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'TheTypeSelector',
  data () {
    return {
      typeSelected: 'trivia'
    }
  },
  watch: {
    typeSelected () {
      this.$store.commit('changeRequestTypeSelected', this.typeSelected)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
