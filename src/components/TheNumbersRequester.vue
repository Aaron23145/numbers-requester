<template>
  <div>
    <InputText
      v-if="requestTypeSelected !== 'date'"
      @ok="request"
    />
    <InputDate
      v-else
      @ok="request"
    />
    <InputRandom @click="request('random')" />
    <TheTypeSelector />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Request from '../request.js'
import Record from '../record.js'

import InputText from './InputText'
import InputDate from './InputDate'
import InputRandom from './InputRandom'
import TheTypeSelector from './TheTypeSelector'

const requester = new Request()

export default {
  name: 'TheNumbersRequester',
  components: {
    InputText,
    InputDate,
    InputRandom,
    TheTypeSelector
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

        this.addRecord(new Record(data))
      }).catch(function (error) {
        console.error(`Handle request error: ${error.toString()}`)
      })
    },
    ...mapMutations([
      'addRecord'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
