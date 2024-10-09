// matchers

test('object', () => {
  const data = {name: 'david'}
  expect(data).toEqual({name: 'david'})
})


test('value null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('boolenas', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)

  expect(0).toBeFalsy()
  expect("").toBeFalsy()
  expect(false).toBeFalsy()
})

test('string', () => {
  expect("kristopht").toMatch(/stop/)
})

test('arrays', () => {
  expect([1,2,3,4]).toContain(3)
})
