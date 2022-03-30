const express= require('express')
const { append } = require('express/lib/response')
const AdminRouter=express.Router()
const Book = require('../Schemas/BookSchema')

AdminRouter.use(express.json())

AdminRouter.get('/viewbooks',(req,res)=>{
    Book.find()
    .then((books)=>{
        res.send(books)
    })
    .catch((err)=>{
        console.log(err)
    })

})

AdminRouter.post('/addbook',(req,res)=>{
    const newbook= new Book ({"bookname":req.body.bookname,"authorname":req.body.authorname,"isbn":req.body.isbn 
    ,"category":req.body.category,"language":req.body.language, "rating":0 , "numberofrating":0 })
    newbook.save()
    .then((result)=>{
        res.send('Book Added Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})

AdminRouter.delete('/deletebook',(req,res)=>{
    Book.findByIdAndDelete({"_id":req.body._id})
    .then((result)=>{
       res.send('Book Deleted Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})
AdminRouter.put('/updatebookinfo',(req,res)=>{
    Book.findByIdAndUpdate({"_id":req.body._id},{"bookname":req.body.bookname,"authorname":req.body.authorname,"isbn":req.body.isbn 
    ,"category":req.body.category,"language":req.body.language})
    .then((result)=>{
        res.send('Book Updated Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})
AdminRouter.post('/addbookrating',(req,res)=>{
    Book.findById(req.body._id)
    .then((resultbook)=>{
       rating= resultbook.rating+req.body.rating;
       numberofrating= resultbook.numberofrating+1
       Book.findbyIdAndUpdate({"_id":req.body._id},{'rating':rating,'numberofrating':numberofrating})
       .then((result)=>{
           console.log('Book Rating Updated Successfully')
       })
       .catch((err)=>{
           console.log(err)
       })
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports=AdminRouter