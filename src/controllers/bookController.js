const { count } = require("console")
const { is } = require("express/lib/request")
const res = require("express/lib/response")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    console.log('rana')
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const isHardCover = async function (req,res){
    let storeBookData = await bookModel.updateMany({isHardCover:false})
    res.send({msg:"done"})
}

const updatedHardCopy = async function(req, res){
    let penguin_id = await publisherModel.find({name:'Penguin'}).select({_id:1})
    let harperCollins_id = await publisherModel.find({name:'HarperCollins'}).select({_id:1})
    let storeBookData1 = await publisherModel.updateOne({publisher:penguin_id},{isHardCover:true},{new:1})
    let storeBookData2 = await publisherModel.updateOne({publisher:harperCollins_id}, {isHardCover:true}, {new:1})
    res.send({msg:"Updated Sucessfully"})
}



module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.isHardCover = isHardCover
module.exports.updatedHardCopy = updatedHardCopy


