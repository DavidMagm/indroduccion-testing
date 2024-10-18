const BooksService = require('./books.service')

//MOCKING
const fakeBooks = [
  {
    id: 1,
    name: "Harry Potter"
  }
];

const mongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => []
};

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => mongoLibStub))
// MOCKING

describe('list service BooksService', () => {
  let service
  beforeEach(() => {
    service = new BooksService
  })

  describe('test getBooks', () => {
    test('shuold run getBook', async () => {
      let books = await service.getBooks()
      console.log(books)
      expect(books.length).toEqual(1)
    })
  })
})
