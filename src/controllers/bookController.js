const {count} = require("console")
const bookModel = require("../models/bookModel")

const createBook = async function(req, res){
    let bookData = req.body
    let save =  await bookModel.create(bookData);
    console.log('stored book data successfully');
    res.send({ msg : save});
}
 
const bookList = async function(req ,res){
    let booksName = await bookModel.find().select({bookName : 1, authorName : 1});
    console.log('Data sent successfully');
    res.send( { msg : booksName} )
}
 
const getBooksInYear = async function(req, res){
    let bookYearData = req.body.year
    let bookYear = await bookModel.find({year : bookYearData});
    console.log('Data sent successfully');
    res.send({ msg : bookYear});
 
 

 
module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
}