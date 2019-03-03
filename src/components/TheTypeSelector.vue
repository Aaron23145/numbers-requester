<template>
  <div class="root">
    <div class="container">
      <button @click="typeSelected = 'trivia'">
        Trivia
      </button>
      <button @click="typeSelected = 'year'">
        Year
      </button>
      <button @click="typeSelected = 'date'">
        Date
      </button>
      <button @click="typeSelected = 'math'">
        Math
      </button>
    </div>
  </div>
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
.root {
  background: red;
}

.container {
  display: flex;
  justify-content: space-around;
}

button {
  background: blue;
  border: none;
  padding: 10px 5%;
}
</style>
