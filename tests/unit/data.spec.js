import Data from '@/data.js'

describe('Data constructor', () => {
  it('creates data object of type trivia with value 5', () => {
    const json = 'Json data'
    const type = 'trivia'
    const number = '5'
    const data = new Data(json, type, number)

    expect(data.json).toMatch('Json data')
    expect(data.type).toMatch('trivia')
    expect(data.number).toBe(5)
  })

  it('creates data object of type date with value 9/21', () => {
    const json = 'Json data'
    const type = 'date'
    const number = '9/21'
    const data = new Data(json, type, number)

    expect(data.json).toMatch('Json data')
    expect(data.type).toMatch('date')
    expect(data.number).toMatch('9/21')
  })

  it('creates data object of type year with value random', () => {
    const json = 'Json data'
    const type = 'year'
    const number = 'random'
    const data = new Data(json, type, number)

    expect(data.json).toMatch('Json data')
    expect(data.type).toMatch('year')
    expect(data.number).toMatch('random')
  })

  it('creates data object of type math with value 92384', () => {
    const json = 'Json data'
    const type = 'math'
    const number = '92384'
    const data = new Data(json, type, number)

    expect(data.json).toMatch('Json data')
    expect(data.type).toMatch('math')
    expect(data.number).toBe(92384)
  })
})
