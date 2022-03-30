const mongoose= require('mongoose')
const express= require('express')
const Schema= mongoose.Schema

const BookSchema = new Schema({
    bookname:{
        type:String
    },
    authorname:{
        type:String
    },
    isbn:{
        type:String
    },
    category:{
        type:String
    },
    language:{
        type:String
    },
    rating:{
        type:float
    },
    numberofrating:{
        type:Number
    }


});
const Book= mongoose.model('Book',BookSchema);
module.exports=Book;