const request = require('supertest');
const { MongoClient } = require('mongodb');
const { config } = require('../src/config');
const createApp = require('../src/app');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('test hello world endpoint', () => {
  let app = null;
  let server = null;
  let dataBase = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3005);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    dataBase = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await dataBase.dropDatabase();
  });
  describe('test get /api/v1/books', () => {
    test('get books', async () => {
      const seedData = await dataBase.collection('books').insertMany([
        {
          name: 'book1',
          year: 2000,
          author: 'david',
        },
        {
          name: 'book1',
          year: 2000,
          author: 'david',
        },
      ]);
      console.log(seedData);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
