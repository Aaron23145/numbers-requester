import Record from '@/record.js'
import Data from '@/data.js'

describe('Record constructor', () => {
  it('Creates a new record with data', () => {
    const json = 'Json data'
    const type = 'trivia'
    const number = '3'
    const data = new Data(json, type, number)
    const record = new Record(data)

    const expectedData = { json: 'Json data', type: 'trivia', number: 3, msg: undefined }
    expect(record.data).toEqual(expectedData)
  })
})
