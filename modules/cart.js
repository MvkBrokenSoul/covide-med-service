const mongoose = require('mongoose');
const cart = mongoose.model('cart',{
   
    user_email: {type: String},
    med_image:{type: String},
      med_name: {type: String},
      med_power: {type: String},
      med_quentity: {type: Number},
      med_price: {type: Number},
      med_type: {type: String}
});
module.exports = cart;