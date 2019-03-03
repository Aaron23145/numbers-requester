<template>
  <div>
    <table>
      <thead>
        <tr>
          <td scope="col">
            #
          </td>
          <td scope="col">
            Value
          </td>
          <td scope="col">
            Type
          </td>
          <td scope="col">
            Date
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(record, id) of allRecords"
          :key="id"
        >
          <td>
            {{ id }}
          </td>
          <td>
            {{ record.data.number }}
          </td>
          <td>
            {{ record.data.type }}
          </td>
          <td>
            {{ formatDate(record.date) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'TheNumbersHistory',
  computed: mapGetters([
    'allRecords'
  ]),
  methods: {
    formatDate (date) {
      return moment(date).format('hh:mm:ss a MMM Do YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
