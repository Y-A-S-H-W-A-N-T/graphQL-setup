import mongoose from "mongoose"

const book = mongoose.Schema({
    author: String,
    books: String,
    copies: String
},{
    timestamps: true
})




const Book = mongoose.model('book',book)

export { Book }