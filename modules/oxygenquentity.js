const mongoose = require('mongoose');
const OxygenQuentitity = mongoose.model('OxygenQuentitity',{
    quentity:{type:Number}
});
module.exports = OxygenQuentitity;