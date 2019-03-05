<template>
  <div class="row">
    <div class="the-numbers-requester col-12 col-md-9 row">
      <div class="col-12 col-md-9">
        <InputText
          v-if="requestTypeSelected !== 'date'"
          @ok="request"
        />
        <InputDate
          v-else
          @ok="request"
        />
      </div>
      <div class="col-12 mt-2 mt-md-0 col-md-3">
        <InputRandom @click="request('random')" />
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

import { mapState, mapMutations } from 'vuex'

import Request from '../request.js'
import Record from '../record.js'

import InputText from './InputText'
import InputDate from './InputDate'
import InputRandom from './InputRandom'

const requester = new Request()

export default {
  name: 'TheNumbersRequester',
  components: {
    InputText,
    InputDate,
    InputRandom
  },
  computed: mapState([
    'requestTypeSelected'
  ]),
  created () {
    console.log(this.$store.getters.allRecordsDescription)
  },
  methods: {
    request (arg) {
      console.log(`Args: ${this.requestTypeSelected}, ${arg}`)
      requester.getData(this.requestTypeSelected, arg).then(data => {
        console.log(`Request result:`)
        console.log(data)

        this.errorFixed()
        this.selectRecord(0)
        this.addRecord(new Record(data))
      }).catch(error => {
        this.unselectRecord()
        this.errorOcurred(error)
      })
    },
    ...mapMutations([
      'addRecord',
      'selectRecord',
      'unselectRecord',
      'errorOcurred',
      'errorFixed'
    ])
  }
}
</script>

<style lang="scss" scoped>
.the-numbers-requester {
  margin: 10px auto;
}
</style>
