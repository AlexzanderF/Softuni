const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/tutorials-workshop';
const { DB_URI } = require('./config');

mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Database connected');
});
