const mongoose = require('mongoose');
const medicineadd = mongoose.model('medicineadd',{
    medicine_name : {type: String},
    medicine_company : {type: String},
    medicine_power : {type: String},
    quentity: {type:Number},
    medicine_type:{type:String},
    medicine_price:{type:Number},
    medicine_image:{type:String},
    medicine_compogision:{type:String},
    medicine_work:{type:String},
    date:{type:String}
});
module.exports = medicineadd;