const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const  PatentDetails = require('../modules/patentdetails.js');

//Base path: http://localhost:3000/patentdetails

router.post('/',(req, res)=>{
    let patentdetails = new PatentDetails({
        name: req.body.name,
        email:req.body.email,
        phno:req.body.phno,
        andharNo:req.body.andharNo,
        age:req.body.age,
        covidAuth:req.body.covidAuth,
        fever:req.body.fever,
        temperature:req.body.temperature,
        symptomdetails:req.body.symptomdetails,
        address:req.body.address,
        chackStst:req.body.chackStst,
        date:req.body.date
    });
    patentdetails.save( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });

});

router.get('/',(req, res)=>{
    PatentDetails.find( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });

});

router.get('/:id',(req, res)=>{
    if(ObjectId.isValid(req.params.id)){
        PatentDetails.findById(req.params.id, (err,doc)=>{
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
    let patentdetails = {
        name: req.body.name,
        email:req.body.email,
        phno:req.body.phno,
        andharNo:req.body.andharNo,
        age:req.body.age,
        covidAuth:req.body.covidAuth,
        fever:req.body.fever,
        temperature:req.body.temperature,
        symptomdetails:req.body.symptomdetails,
        address:req.body.address,
        chackStst:req.body.chackStst,
        date:req.body.date,
    };
    PatentDetails.findByIdAndUpdate(req.params.id, {$set :patentdetails}, {new:true}, (err,doc)=>{
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
        PatentDetails.findByIdAndRemove(req.params.id, (err,doc)=>{
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