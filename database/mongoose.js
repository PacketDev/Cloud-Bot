const mongoose = require('mongoose');
const config = require('../config.json');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect(`mongodb+srv://CloudBot:z7KYRvP8c2y82vNf@cluster0.gzxrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Cloud Bot has connected to the database.');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Cloud Bot has disconnected from the database.');
        });

        mongoose.connection.on('err', (err) => {
            console.log('There was an error with the connection to the database:' + err);
        });
    }
};