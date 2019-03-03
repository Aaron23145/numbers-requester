<template>
  <div class="the-numbers-history row">
    <table class="col-10 table table-borderless">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Value
          </th>
          <th scope="col">
            Type
          </th>
          <th scope="col">
            Date
          </th>
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
import 'bootstrap/dist/css/bootstrap.min.css'

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
.the-numbers-history {
  padding-bottom: 20px;
}

table {
  margin: 0 auto;
  color: var(--active-color);
  border-color: var(--active-color);
}

th {
  width: 20%;
}

th:last-of-type {
  width: 40%;
}

tr {
  transition: background .5s;
}

tr:hover {
  background: var(--active-light-color);
}
</style>
