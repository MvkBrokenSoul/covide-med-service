
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

module.exports = transport;