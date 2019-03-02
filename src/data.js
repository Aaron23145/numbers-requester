export default class Data {
  constructor (response, type, number) {
    this.json = response
    this.msg = response.data
    this.type = type
    if (this.type === 'date') this.number = number
    else {
      this.number = parseInt(number)
      if (isNaN(this.number)) this.number = 'random'
    }
  }
}
