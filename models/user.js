const mongoose = require('mongoose');
const User = mongoose.model('User',{
    name : {type: String},
    email: {type:String},
    phno:{type:Number},
    password:{type:String}
});
module.exports = User;