const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/userDB', (err)=>{
    if(!err){
        console.log("db user connection is successfull");
    }else{
        console.log('error is'+err)
    }
});

module.exports = mongoose;