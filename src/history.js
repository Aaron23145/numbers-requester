export default class History {
  constructor () {
    this.lsIndex = 'history'
    if (!this.exists()) this.init()
    else this.init(false)
  }

  exists () {
    return localStorage.getItem(this.lsIndex) !== null
  }

  init (create = true) {
    if (create) {
      this.history = []
      this.save()
    } else {
      this.load()
    }
  }

  load () {
    this.historyObj = this.getObj()
    this.history = this.historyObj.history
  }

  save () {
    this.historyObj = {}
    this.historyObj.history = this.history
    this.setObj(this.historyObj)
  }

  clear () {
    localStorage.removeItem(this.lsIndex)
    this.init()
  }

  getObj () {
    const stringObject = localStorage.getItem(this.lsIndex)
    return JSON.parse(stringObject)
  }

  setObj (object) {
    const stringObject = JSON.stringify(object)
    localStorage.setItem(this.lsIndex, stringObject)
  }
}
