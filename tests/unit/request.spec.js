import axios from 'axios'
import Request from '@/request.js'

jest.mock('axios')

describe('Request constructor', () => {
  it('performs a trivia with arg 3 request', () => {
    axios.get.mockResolvedValue({ data: '5 is the number of dots in a quincunx.' })
    const requester = new Request()

    return requester.getData('trivia', '5').then(data => {
      const jsonExpected = { data: '5 is the number of dots in a quincunx.' }
      const msgExpected = '5 is the number of dots in a quincunx.'
      const typeExpected = 'trivia'
      const numberExpected = 5

      expect(data.json).toEqual(jsonExpected)
      expect(data.msg).toMatch(msgExpected)
      expect(data.type).toMatch(typeExpected)
      expect(data.number).toBe(numberExpected)
    })
  })

  it('performs a math with arg random request', () => {
    axios.get.mockResolvedValue({ data: '7743 is the smallest number whose 9^{th} power has 35 digits.' })
    const requester = new Request()

    return requester.getData('math', 'random').then(data => {
      const jsonExpected = { data: '7743 is the smallest number whose 9^{th} power has 35 digits.' }
      const msgExpected = '7743 is the smallest number whose 9^{th} power has 35 digits.'
      const typeExpected = 'math'
      const numberExpected = 'random'

      expect(data.json).toEqual(jsonExpected)
      expect(data.msg).toMatch(msgExpected)
      expect(data.type).toMatch(typeExpected)
      expect(data.number).toMatch(numberExpected)
    })
  })

  it('performs a date with arg 2/29 request', () => {
    axios.get.mockResolvedValue({ data: 'February 29th is the day in 1952 that the island of Heligoland is restored to German authority.' })
    const requester = new Request()

    return requester.getData('date', '2/29').then(data => {
      const jsonExpected = { data: 'February 29th is the day in 1952 that the island of Heligoland is restored to German authority.' }
      const msgExpected = 'February 29th is the day in 1952 that the island of Heligoland is restored to German authority.'
      const typeExpected = 'date'
      const numberExpected = '2/29'

      expect(data.json).toEqual(jsonExpected)
      expect(data.msg).toMatch(msgExpected)
      expect(data.type).toMatch(typeExpected)
      expect(data.number).toMatch(numberExpected)
    })
  })

  it('performs a year with arg 276 request', () => {
    axios.get.mockResolvedValue({ data: '276 is the year that Emperor Tacitus doubled the silver content of the aurelianianus and halved its tariffing to 2.5 d.c. carry the value marks X.I.' })
    const requester = new Request()

    return requester.getData('year', '276').then(data => {
      const jsonExpected = { data: '276 is the year that Emperor Tacitus doubled the silver content of the aurelianianus and halved its tariffing to 2.5 d.c. carry the value marks X.I.' }
      const msgExpected = '276 is the year that Emperor Tacitus doubled the silver content of the aurelianianus and halved its tariffing to 2.5 d.c. carry the value marks X.I.'
      const typeExpected = 'year'
      const numberExpected = 276

      expect(data.json).toEqual(jsonExpected)
      expect(data.msg).toMatch(msgExpected)
      expect(data.type).toMatch(typeExpected)
      expect(data.number).toBe(numberExpected)
    })
  })

  it('performs a failed math with arg 23 request', () => {
    expect.assertions(1)
    axios.get.mockRejectedValue('Some error ocurred')
    const requester = new Request()

    return requester.getData('math', '23').catch(error => {
      expect(error).toMatch('Some error ocurred')
    })
  })
})
