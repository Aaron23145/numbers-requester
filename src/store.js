import Vue from 'vue'
import Vuex from 'vuex'

import History from './history.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requestTypeSelected: 'trivia',
    requestPerformed: false,
    history: new History()
  },
  mutations: {
    changeRequestTypeSelected (state, newType) {
      state.requestTypeSelected = newType
    },
    addRecord (state, record) {
      state.history.history.splice(0, 0, record)
      state.history.save()
    },
    removeRecord (state, index) {
      state.history.history.splice(index, 1)
      state.history.save()
    },
    clearRecords (state) {
      state.history.clear()
    },
    requestPerformed (state) {
      state.requestPerformed = true
    }
  },
  getters: {
    requestTypeSelected: (state) => state.requestTypeSelected,
    record: (state) => (index) => state.history.history[index],
    recordMsg: (state, getters) => (index) => getters.record(index).data.msg,
    lastRecord: (state, getters) => getters.record(0),
    lastRecordMsg: (state, getters) => getters.lastRecord.data.msg,
    allRecords: (state) => state.history.history,
    allRecordsDescription (state, getters) {
      const records = getters.allRecords
      if (!records.length) {
        return 'Empty history'
      }

      let out = ''
      records.map(function (record) {
        out += `\n\n${record.data.msg}\n${record.date}\n${record.data.type}\n${record.data.number}`
      })
      return out
    }
  }
})
