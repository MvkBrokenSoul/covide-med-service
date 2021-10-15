const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const  Prescription = require('../modules/Prescription.js');
var nodemailer = require('nodemailer');

//Base path: http://localhost:3000/prescription

var transport = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'covidmedservice@gmail.com',
        pass:'robin123@'
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post('/', (req, res)=>{
    let prescription = new Prescription({
        name: req.body.name,
        dname:req.body.dname,
        email:req.body.email,
        phno:req.body.phno,
        age:req.body.age,
        covidAuth:req.body.covidAuth,
        fever:req.body.fever,
        temperature:req.body.temperature,
        symptomdetails:req.body.symptomdetails,
        problemdate:req.body.problemdate,
        medicine:req.body.medicine,
        date:req.body.date
    });
     prescription.save( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });
    var name = req.body.name;
    var mailOptions = {
        from: 'covidmedservice@gmail.com',
        to:req.body.email,
        subject:"For Prescription Download",
        text:"dear "+name+"\n"+"your prescription is ready plesease download from website"
    }
    transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log("email has been sent",info.response);
        }
    })
});

router.get('/', (req, res)=>{
     Prescription.find( (err,doc)=>{
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
        Prescription.findById(req.params.id, (err,doc)=>{
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
    let prescription = {
        name: req.body.name,
        dname:req.body.dname,
        email:req.body.email,
        phno:req.body.phno,
        age:req.body.age,
        covidAuth:req.body.covidAuth,
        fever:req.body.fever,
        temperature:req.body.temperature,
        symptomdetails:req.body.symptomdetails,
        problemdate:req.body.problemdate,
        medicine:req.body.medicine,
        date:req.body.date
    };
    Prescription.findByIdAndUpdate(req.params.id, {$set :prescription}, {new:true}, (err,doc)=>{
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
        Prescription.findByIdAndRemove(req.params.id, (err,doc)=>{
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