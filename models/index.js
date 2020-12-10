
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/test98';

// Connect to MongoDB (local)
// First argument is the connection string
// Second argument is config object
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB successfully connected...');
});

mongoose.connection.on('error', (error) => {
  console.log(`MongoDB connection error: ${error}`);
});

module.exports = {
  Article: require('./Article')
};