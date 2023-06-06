const { connect, connection } = require('mongoose');

//edit the link
connect('mongodb://localhost/userThoughtReaction', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;