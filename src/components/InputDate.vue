<template>
  <div class="input-date row">
    <select
      v-model="monthSelected"
      class="col-3"
    >
      <DefaultEmptyOption empty-option-text="Select Month" />
      <option
        v-for="key of Object.keys(monthDays)"
        :key="key"
        :value="key"
      >
        {{ key }}
      </option>
    </select>

    <select
      v-if="monthSelected"
      v-model="daySelected"
      class="col-3"
    >
      <DefaultEmptyOption empty-option-text="Select Day" />
      <option
        v-for="numberOfDays in monthDays[monthSelected][1]"
        :key="numberOfDays"
        :value="numberOfDays"
      >
        {{ numberOfDays }}
      </option>
    </select>
    <div
      v-else
      class="col-3"
    />

    <button
      v-if="daySelected"
      class="col-3"
      @click="request"
    >
      Request
    </button>
    <div
      v-else
      class="col-3"
    />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

import DefaultEmptyOption from './DefaultEmptyOption'

const monthDays = Object.freeze({
  January: [1, 31],
  February: [2, 29],
  March: [3, 31],
  April: [4, 30],
  May: [5, 31],
  June: [6, 30],
  July: [7, 31],
  August: [8, 31],
  September: [9, 30],
  October: [10, 31],
  November: [11, 30],
  December: [12, 31]
})

export default {
  name: 'InputDate',
  components: {
    DefaultEmptyOption
  },
  data () {
    return {
      monthDays,
      monthSelected: null,
      daySelected: null
    }
  },
  methods: {
    request () {
      this.$emit('ok', `${this.getMonthNumberFromName(this.monthSelected)}/${this.daySelected}`)
    },
    getMonthNumberFromName (month) {
      return this.monthDays[month][0]
    }
  }
}
</script>

<style lang="scss" scoped>
.input-date {
  justify-content: space-between;
  height: 100%;
}

select, button {
  display: block;
  height: 100%;
}

select {
  color: var(--active-color);
  border: 2px solid var(--active-color);
  border-radius: 3px;
  background: transparent;
}

button {
  color: var(--active-color);
  border: 2px solid var(--active-color);
  border-radius: 3px;
  background: transparent;
  transition: background .5s;
}

button:hover {
  background: var(--active-light-color);
}
</style>
