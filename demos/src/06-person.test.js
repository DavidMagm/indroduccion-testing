const Person = require('./06-person');
describe('test the person', () => {
  let person
  beforeEach(() => {
    person = new Person('david', 45, 1.7)
  })
  test('should down', () => {
    person.weight = 45
    let imc = person.calcIMC()
    expect(imc).toBe('down')
  })
  test('should normal', () => {
    person.weight = 60
    let imc = person.calcIMC()
    expect(imc).toBe('normal')
  })
})
