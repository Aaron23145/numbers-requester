<template>
  <div class="mt-0 mt-sm-3">
    <div class="container d-flex justify-content-around p-0 p-sm-1">
      <button
        class="trivia-button flex-grow-1 flex-sm-grow-0"
        :class="{ active: typeSelected === 'trivia' }"
        @click="typeSelected = 'trivia'"
      >
        Trivia
      </button>
      <button
        class="year-button flex-grow-1 flex-sm-grow-0"
        :class="{ active: typeSelected === 'year' }"
        @click="typeSelected = 'year'"
      >
        Year
      </button>
      <button
        class="date-button flex-grow-1 flex-sm-grow-0"
        :class="{ active: typeSelected === 'date' }"
        @click="typeSelected = 'date'"
      >
        Date
      </button>
      <button
        class="math-button flex-grow-1 flex-sm-grow-0"
        :class="{ active: typeSelected === 'math' }"
        @click="typeSelected = 'math'"
      >
        Math
      </button>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

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
button {
  background: transparent;
  border: 2px solid transparent;
  border-radius: 3px;
  padding: 10px 5%;
  transition: background .5s;
  outline: none;
}

.trivia-button {
  color: var(--main-dark-red);
  border-color: var(--main-dark-red);
}

.trivia-button:hover,
.trivia-button.active {
  background: var(--main-red);
}

.year-button {
  color: var(--main-dark-blue);
  border-color: var(--main-dark-blue);
}

.year-button:hover,
.year-button.active {
  background: var(--main-blue);
}

.date-button {
  color: var(--main-dark-green);
  border-color: var(--main-dark-green);
}

.date-button:hover,
.date-button.active {
  background: var(--main-green);
}

.math-button {
  color: var(--main-dark-yellow);
  border-color: var(--main-dark-yellow);
}

.math-button:hover,
.math-button.active {
  background: var(--main-yellow);
}
</style>
