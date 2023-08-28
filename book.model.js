var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Database scheme for a book, it seems 
var bookSchema = new Schema({
    title: String,
    author: String,
    rating: Number,
});

//idk why this is setup this way i will look into it.
var bookModel = mongoose.model("book", bookSchema, "book");

module.exports = bookModel;
