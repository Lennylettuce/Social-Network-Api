const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3001/userThoughtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;