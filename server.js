const express = require('express');
require('dotenv').config();
const contactRoute = require('./routes/authenticationRouter');
const userRoute = require('./routes/userRoute');
const mongoose = require('mongoose');
const errorHandlers = require('./middleware/errorHandlers');

const app = express();

app.use(express.json());

app.use('/', (req, res, next)=> {
    next();    
})

app.use("/contacts", contactRoute);
app.use("/user", userRoute);

app.use(errorHandlers);

mongoose.connect(process.env.MONGO_URI).then(()=> {
    app.listen(process.env.PORT, (e)=> {
        if (e) {
            console.log(e)
        }
        console.log(`Port is Listening ${process.env.PORT}`);
    })
})