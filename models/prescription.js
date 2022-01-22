const mongoose = require('mongoose');
const Prescription = mongoose.model('Prescription',{
    name : {type: String},
    dname:{type:String},
    email:{type: String},
    phno:{type: Number,default: 8777094132},
    age:{type: Number},
    covidAuth:{type: String},
    fever:{type:String},
    temperature:{type: Number,default: 98.5},
    symptomdetails:{type: String},
    problemdate:{type:Date},
    medicine:{type:String},
    date:{type: Date, default: Date.now}
});
module.exports = Prescription;