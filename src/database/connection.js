const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function () {
  console.log('conectado');

});

module.exports = database;