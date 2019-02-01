// require the library
const mongoose = require('mongoose');

// connect to a specific database running on localhost
mongoose.connect('mongodb://localhost/gdgeventdb');

// get the database access from connection
const db = mongoose.connection;

// if there was an error, then log it
db.on('error', console.error.bind(console, 'connection error'));

// if the db connected successfully, then display success message
db.once('open', function(){
    console.log('connected to database!');
});


// export the db to be used externally
module.exports = db;
