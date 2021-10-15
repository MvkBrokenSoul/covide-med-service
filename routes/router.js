const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const User = require('../modules/user.js');
//Get, Post, Put, Delete
//Base path: http://localhost:3000/user

//Post Api

router.post('/', (req, res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno,
        password: req.body.password
    });
     user.save( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });

});
//Get api
router.get('/', (req, res)=>{
     User.find( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });

});
//get api for single output
router.get('/:id', (req, res)=>{
    if(ObjectId.isValid(req.params.id)){
         User.findById(req.params.id, (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });
}  
});

router.put('/:id', (req, res)=>{
    if(ObjectId.isValid(req.params.id)){
    let user = {
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno,
        password: req.body.password
    };
     User.findByIdAndUpdate(req.params.id, {$set :user}, {new:true}, (err,doc)=>{
        if (err){
            console.log('error is put data'+err);
        }
        else{
            res.send(doc);
        }
    });
    }
});

router.delete('/:id', (req, res)=>{
    if(ObjectId.isValid(req.params.id)){
     User.findByIdAndRemove(req.params.id, (err,doc)=>{
        if (err){
            console.log('error is delete data'+err);
        }
        else{
            res.send(doc);
        }
    });
    }
});

module.exports = router;