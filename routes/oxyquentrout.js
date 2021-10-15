const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const OxygenQuentitity = require('../modules/oxygenquentity.js');
//Get, Post, Put, Delete
//Base path: http://localhost:3000/oxygenquentity

//Post Api

router.post('/',(req, res)=>{
    let oxygenquentity = new OxygenQuentitity({
        quentity: req.body.quentity
    });
    oxygenquentity.save( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });

});
//Get api
router.get('/',(req, res)=>{
    OxygenQuentitity.find( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });

});
//get api for single output
router.get('/:id',(req, res)=>{
    if(ObjectId.isValid(req.params.id)){
        OxygenQuentitity.findById(req.params.id, (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });
}
   
});

router.put('/:id',(req, res)=>{
    if(ObjectId.isValid(req.params.id)){
    let oxygenquentity = {
        quentity: req.body.quentity,

    };
    OxygenQuentitity.findByIdAndUpdate(req.params.id, {$set :oxygenquentity}, {new:true}, (err,doc)=>{
        if (err){
            console.log('error is put data'+err);
        }
        else{
            res.send(doc);
        }
    });
    }
});

router.delete('/:id',(req, res)=>{
    if(ObjectId.isValid(req.params.id)){
    OxygenQuentitity.findByIdAndRemove(req.params.id, (err,doc)=>{
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