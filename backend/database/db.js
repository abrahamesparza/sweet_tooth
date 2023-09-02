const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://ae:NgzFloMyFEwBF2nF@clus.0bkv9pu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
