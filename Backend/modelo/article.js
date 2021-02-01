'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var arcticleSchema = Schema({
    title : String,
    content: String,
    date: {type: Date, default: Date.now},
    image: String
})

module.exports = mongoose.model('Article', arcticleSchema);
