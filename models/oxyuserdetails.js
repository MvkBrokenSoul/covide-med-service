const mongoose = require('mongoose');
const OxyUserDetails = mongoose.model('OxyUserDetails',{
    name : {type: String},
    email: {type:String},
    phno:{type:Number},
    address:{type:String},
    pin:{type:Number},
    andharNo:{type:Number},
    causeforOxy:{type:String},
    CovidAuth:{type:Boolean},
    date:{type: Date, default: Date.now},
    deletveryStat:{type:String}
});
module.exports = OxyUserDetails;