<template>
  <div>
    <label>
      Month:
      <select v-model="monthSelected">
        <DefaultEmptyOption />
        <option
          v-for="key of Object.keys(monthDays)"
          :key="key"
          :value="key"
        >
          {{ key }}
        </option>
      </select>
    </label>
    <label v-if="monthSelected">
      Day:
      <select v-model="daySelected">
        <DefaultEmptyOption />
        <option
          v-for="numberOfDays in monthDays[monthSelected][1]"
          :key="numberOfDays"
          :value="numberOfDays"
        >
          {{ numberOfDays }}
        </option>
      </select>
    </label>
    <button
      v-if="daySelected"
      @click="request"
    >
      Request
    </button>
  </div>
</template>

<script>
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
</style>
