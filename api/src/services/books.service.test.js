const { generateManyBooks } = require('../fakes/books.fake');
const BooksService = require('./books.service');

// MOCKING

const mockGetAll = jest.fn(); // SPY

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));
// MOCKING

describe('list service BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test getBooks', () => {
    test('shuold run getBook', async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
