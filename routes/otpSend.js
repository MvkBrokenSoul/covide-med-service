const express = require('express');
const router = express.Router();
var transport = require('../middleware/mail.js')
//Base path: http://localhost:3000/otpsend
// var transport = nodemailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:{
//         user:'covidmedservice@gmail.com',
//         pass:'robin123@'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

router.get('/:OTP/:Email',(req,res)=>{
    var OTP= req.params.OTP
    var mailOptions = {
        from: 'covidmedservice@gmail.com',
        to:req.params.Email,
        subject:"",
        text:"Your Otp is: "+OTP,
       }
    transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log("email has been sent",info.response);
        }
    })
})
module.exports = router;