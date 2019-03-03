import moment from 'moment'

export default class Record {
  constructor (data) {
    this.data = data
    this.date = moment()
  }
}
