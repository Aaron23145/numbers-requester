<template>
  <div class="row">
    <div class="root col-9 row">
      <div class="col-9">
        <InputText
          v-if="requestTypeSelected !== 'date'"
          @ok="request"
        />
        <InputDate
          v-else
          @ok="request"
        />
      </div>
      <div class="col-3">
        <InputRandom @click="request('random')" />
      </div>
    </div>
  </div>
</template>

<script>
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

        this.requestPerformed()
        this.addRecord(new Record(data))
      }).catch(function (error) {
        console.error(`Handle request error: ${error.toString()}`)
      })
    },
    ...mapMutations([
      'addRecord',
      'requestPerformed'
    ])
  }
}
</script>

<style lang="scss" scoped>
.root {
  margin: 0 auto;
}
</style>
