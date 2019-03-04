<template>
  <div class="the-numbers-history">
    <button @click="clearRecords">
      Clear history
    </button>
    <div class="row">
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
            v-for="(record, index) of allRecords"
            :key="index"
            :class="{ active: recordSelected === index }"
            @click="selectRecord(index)"
          >
            <td>
              {{ index }}
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
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

import moment from 'moment'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'TheNumbersHistory',
  computed: {
    ...mapGetters([
      'allRecords'
    ]),
    ...mapState([
      'recordSelected'
    ])
  },
  methods: {
    formatDate (date) {
      return moment(date).format('hh:mm:ss a MMM Do YYYY')
    },
    ...mapMutations([
      'clearRecords',
      'selectRecord'
    ])
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

tr:hover,
tr.active {
  background: var(--active-light-color);
}

button {
  background: transparent;
  color: var(--active-color);
  border: 2px solid var(--active-color);
  border-radius: 3px;
  display: block;
  width: 50%;
  margin: 0 auto 10px;
  outline: none;
}

button:hover {
  background: var(--active-light-color);
  transition: background .5s;
}
</style>
