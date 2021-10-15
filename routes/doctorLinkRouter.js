const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const doctorLink = require('../modules/doctorLink.js');
var nodemailer = require('nodemailer');
//Get, Post, Put, Delete
//Base path: http://localhost:3000/doctorlink

//Post Api

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

router.post('/',async (req, res)=>{
    try{
        let doctorlink = new doctorLink({
            name: req.body.name,
            email: req.body.email,
            videoLink:req.body.videoLink,
            date:req.body.date
        });
        const doclink = await doctorlink.save();
        res.send(doclink);

    }
    catch(e){
        res.send(e);
    }

    var name = req.body.name;
    var videoLink = req.body.videoLink;
    var date = req.body.date;
    var mailOptions = {
        from: 'covidmedservice@gmail.com',
        to:req.body.email,
        subject:"",
        text:"dear "+name+"\n"+"We send your video conference link: "+videoLink+"join on date: "+date
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
//Get api
router.get('/',async (req, res)=>{

    try{
        const getdoclink = await doctorLink.find();
        res.send(getdoclink);

    }
    catch(e){
        res.send(e);
    }
});
//get api for single output
router.get('/:id',async (req, res)=>{
try{
    const _id = req.params.id;
    const getdoclink = await doctorLink.findById(_id);
    console.log(getdoclink)
    if(!getdoclink){
        return res.status(404).send();
    }else{
        res.send(getdoclink);
     }
    
}
catch(e){
    res.send(e);
}
});



router.delete('/:id',async (req, res)=>{

    try{
        const deletelink = await doctorLink.findByIdAndDelete(req.params.id);
        res.send(deletelink)
    }
    catch(e){
        res.send(e)
    }
});

module.exports = router;