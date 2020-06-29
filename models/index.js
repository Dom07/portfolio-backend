const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/portfolio",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    error => error ? console.log(error): null
);

module.exports.Blog = require('./blog');