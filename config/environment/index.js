var config = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/currency-rates',
    options: {
      db: { safe: true }
    }
  }
}

module.exports = config;
