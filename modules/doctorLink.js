const mongoose = require('mongoose');
const doctorLink = mongoose.model('doctorLink',{
    name : {type: String},
    email: {type:String},
    videoLink:{type:String},
    date:{type:String}
});
module.exports = doctorLink;