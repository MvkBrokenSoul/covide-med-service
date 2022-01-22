const mongoose = require('mongoose');
const PatentDetails = mongoose.model('PatentDetails',{
    name : {type: String},
    email:{type: String},
    phno:{type: Number},
    andharNo:{type: Number},
    age:{type: Number},
    covidAuth:{type: String},
    fever:{type:String},
    temperature:{type: Number,default: 98.5},
    symptomdetails:{type: String},
    address:{type: String},
    chackStst:{type: Boolean,default: false},
    date:{type: Date, default: Date.now}
});
module.exports = PatentDetails;