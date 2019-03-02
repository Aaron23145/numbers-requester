import axios from 'axios'
import Data from './data.js'

export default class Request {
  constructor () {
    this.apiUrl = 'http://numbersapi.com'
  }

  getData (type, arg) {
    return new Promise((resolve, reject) => {
      this.perform(type, arg).then(function (response) {
        resolve(new Data(response, type, arg))
      }).catch(function (error) {
        reject(error)
      })
    })
  }

  perform (type, arg) {
    return new Promise((resolve, reject) => {
      const requestUrl = `${this.apiUrl}/${arg}/${type}`
      axios.get(requestUrl)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
