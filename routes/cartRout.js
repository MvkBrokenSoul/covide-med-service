const express = require('express');
const app = express()
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Cart = require('../models/cart.js');


router.post('/',async (req, res)=>{
    try{
        let cart = new Cart({
            user_email: req.body.user_email,
            med_image:req.body.med_image,
            med_name: req.body.med_name,
            med_power: req.body.med_power,
            med_quentity: req.body.med_quentity,
            med_price: req.body.med_price,
            med_type: req.body.med_type
        });
        const cart_item = await cart.save();
        res.send(cart_item);
    
    }
    catch(e){
        res.send(e);
    }

    


});


router.get('/',async(req,res)=>{
    try{
        const cart = await Cart.find();
        res.send(cart)
    }catch(e){
        res.status(404).send(e);
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const cart = await Cart.findById(_id);
        res.send(cart);
    }catch(e){
        res.status(404).send(e);
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const cart = await Cart.findByIdAndDelete(req.params.id)
        if(!req.params.id){
            return res.status(404).send()
        }
        res.send(cart);
    }catch(e){
        res.status(500).send(e);
    }
})
router.delete('/',async(req,res)=>{
    try{
        const cart = await Cart.remove()
        res.send(cart);
    }catch(e){
        res.status(500).send(e);
    }
})
router.put('/:id', async(req,res)=>{
    try{
        let cart = {
            user_email: req.body.user_email,
            med_image:req.body.med_image,
            med_name: req.body.med_name,
            med_power: req.body.med_power,
            med_quentity: req.body.med_quentity,
            med_price: req.body.med_price,
            med_type: req.body.med_type
        };
        const cart_item = await Cart.findByIdAndUpdate(req.params.id,{$set :cart}, {new:true})
        res.send(cart_item)
    }catch(e){
        res.status(500).send(e);
    }
})
module.exports = router;