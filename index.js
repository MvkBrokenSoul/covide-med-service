const express = require('express');

const cors = require('cors');
const mongoose = require('./dbuser.js');
const app = express();
const routes = require('./routes/router.js');
const oxyquentrout = require('./routes/oxyquentrout.js');
const oxyuserrout = require('./routes/oxyuserrout.js');
const patentdetailsrout = require('./routes/patentdetailsrout.js');
const doctorLinkRout = require('./routes/doctorLinkRouter.js');
const Prescription = require('./routes/prescriptionRout.js');
const otpsendrout = require('./routes/otpSend.js');
const medaddrouter = require('./routes/medaddrouter');
const fileupload = require('express-fileupload')

app.use(fileupload({
    useTempFiles:true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000, ()=> console.log('Server started at 3000'));

app.use('/user', routes);
app.use('/oxyquent',oxyquentrout);
app.use('/oxyuserdetails', oxyuserrout);
app.use('/patentdetails', patentdetailsrout);
app.use('/doctorlink', doctorLinkRout);
app.use('/prescription', Prescription);
app.use('/otpsend', otpsendrout);
app.use('/medadd',medaddrouter)
