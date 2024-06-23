const mongoose = require('mongoose')

const book = mongoose.Schema({
    author: String,
    books: String,
    copies: String
},{
    timestamps: true
})




const Book = mongoose.model('book',book)

module.exports = { Book }