const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const  OxyUserDetails = require('../modules/OxyUserDetails.js');
var nodemailer = require('nodemailer');
//Base path: http://localhost:3000/oxyuserdetails

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

router.post('/',(req, res)=>{
    let oxyuserdetails = new OxyUserDetails({
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno,
        address:req.body.address,
        pin:req.body.pin,
        andharNo:req.body.andharNo,
        causeforOxy:req.body.causeforOxy,
        CovidAuth:req.body.CovidAuth,
        date:req.body.date,
    });
    oxyuserdetails.save( (err,doc)=>{
        if (err){
            console.log('error is Post data'+err);
        }
        else{
            res.send(doc);
        }
    });

    var mailOptions = {
        from: 'covidmedservice@gmail.com',
        to:req.body.email,
        subject:"Oxygen Booking",
        text:"Dear Sir,"+"\n"+"We get your oxygen order."
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

router.get('/',(req, res)=>{
    OxyUserDetails.find( (err,doc)=>{
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
        OxyUserDetails.findById(req.params.id, (err,doc)=>{
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
    let oxyuserdetails = {
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno,
        address:req.body.address,
        pin:req.body.pin,
        andharNo:req.body.andharNo,
        causeforOxy:req.body.causeforOxy,
        CovidAuth:req.body.CovidAuth,
        date:req.body.date,
    };
    OxyUserDetails.findByIdAndUpdate(req.params.id, {$set :oxyuserdetails}, {new:true}, (err,doc)=>{
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
    OxyUserDetails.findByIdAndRemove(req.params.id, (err,doc)=>{
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