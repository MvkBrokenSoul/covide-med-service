const transport = require('./middleware/mail.js')
var name="anupam"
var mailOptions = {
    from: 'covidmedservice@gmail.com',
    to:'rrpom129@gmail.com',
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