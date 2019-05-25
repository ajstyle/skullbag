

var mongoose = require('mongoose');

//Set up default mongoose connection

//demo URL
var mongoDB = 'mongodb://amitjain:amit1992@cluster0-shard-00-00-5zwls.mongodb.net:27017,cluster0-shard-00-01-5zwls.mongodb.net:27017,cluster0-shard-00-02-5zwls.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(mongoDB, { useMongoClient : true   });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notificati#on of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
