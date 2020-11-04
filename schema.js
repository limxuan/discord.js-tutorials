const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    id : String
})

module.exports = mongoose.model('blacklist', Schema)
