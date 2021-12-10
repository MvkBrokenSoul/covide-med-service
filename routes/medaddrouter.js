const express = require('express');
const app = express()
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Medicineadd = require('../modules/medicineadd.js');
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');



dotenv.config()

cloudinary.config({
    cloud_name: 'covid-home-care',
    api_key: '456369572587915',
    api_secret: 'MnW-kFzNpKedL6He-twzFBTBLS0',
})


// const fileUpload = require('express-fileupload');
// // const multer = require('multer')
// const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']
// const multer = require('../../../../../../../../Users/user/Desktop/minorproject/frontend/covid-medical-service/src/assets/images')
// const storage = multer.diskStorage({
//     destination: (req, file, callback) =>{
//     callback(null,'uploads')
//   },
//   filename:  (req, file, callback)=> {
//     callback(null, file.fieldname + '-' + Date.now() + '.jpg')
// }
// })





// const uploadImg = multer({storage: storage})


router.post('/',(req,res)=>{

    const file = req.files.image
    cloudinary.uploader.upload(file.tempFilePath, (err,result)=>{
            console.log(result)
            const medicineadd = new Medicineadd({
                medicine_name : req.body.medicine_name,
                medicine_company: req.body.medicine_company,
                medicine_power: req.body.medicine_power,
                quentity: req.body.quentity,
                medicine_type:req.body.medicine_type,
                medicine_price:req.body.medicine_price,
                medicine_image:result.url,
                medicine_compogision:req.body.medicine_compogision,
                medicine_work:req.body.medicine_work,
                date:req.body.date
                });
            medicineadd.save( (err,doc)=>{
                    if (err){
                        console.log('error is Post data'+err);
                    }
                    else{
                        res.send(doc);
                    }
                });
    })
});
router.get('/',async(req,res)=>{
    try{
        const medadd = await Medicineadd.find();
        res.send(medadd)
    }catch(e){
        res.status(404).send(e);
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const medadd = await Medicineadd.findById(_id);
        res.send(medadd);
    }catch(e){
        res.status(404).send(e);
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const deletedmed = await Medicineadd.findByIdAndDelete(req.params.id)
        if(!req.params.id){
            return res.status(404).send()
        }
        res.send(deletedmed);
    }catch(e){
        res.status(500).send(e);
    }
})
router.put('/:id', async(req,res)=>{
    try{
        let medicineadd={
            medicine_name : req.body.medicine_name,
            medicine_company: req.body.medicine_company,
            medicine_power: req.body.medicine_power,
            quentity: req.body.quentity,
            medicine_type:req.body.medicine_type,
            medicine_price:req.body.medicine_price,
            medicine_image:req.body.medicine_image,
            medicine_compogision:req.body.medicine_compogision,
            medicine_work:req.body.medicine_work,
            date:req.body.date
            };
        const updatemed = await Medicineadd.findByIdAndUpdate(req.params.id,{$set :medicineadd}, {new:true})
        res.send(updatemed)
    }catch(e){
        res.status(500).send(e);
    }
})
module.exports = router;