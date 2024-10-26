const mockGetAll = jest.fn(); // SPY
const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/books.fake');
const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('test hello world endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });
  describe('test get /api/v1/books', () => {
    test('get books', () => {
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => { console.log(body); expect(body.length).toEqual(fakeBooks.length); });
    });
  });
});
