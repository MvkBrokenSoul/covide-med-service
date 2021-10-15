const { render } = require('express/lib/response');
var nodemailer = require('nodemailer');

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
var name="anupam"
var mailOptions = {
    from: 'covidmedservice@gmail.com',
    to:'anupamdas129@gmail.com',
    subject:"hi how are u?",
    text:"my name is"+"\n"+name,
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log("email has been sent",info.response);
    }
})