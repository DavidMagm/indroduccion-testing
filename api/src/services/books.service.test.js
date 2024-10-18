const BooksService = require('./books.service')

//MOCKING
const fakeBooks = [
  {
    id: 1,
    name: "Harry Potter"
  }
];

const mockGetAll = jest.fn() // SPY

const mongoLibStub = {
  getAll: mockGetAll,
  create: () => {}
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
      let books = await service.getBooks({})
      mockGetAll.mockResolvedValue(fakeBooks)
      console.log(books)
      expect(books.length).toEqual(1)
      expect(mockGetAll).toHaveBeenCalled()
      expect(mockGetAll).toHaveBeenCalledWith('books', {})
    })
  })
})
