const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./api/index');
const bodyParser = require('body-parser');

const tourServer = async function(){
    try{
        //init app
        const app = express();

        //connect to mongodb
        await mongoose.connect('mongodb://localhost:27017/tour-manager');

        //user middleware + routers
        app.use(bodyParser.urlencoded({
            extended: false
        }));
        app.use(bodyParser.json());
        app.use(apiRouter);
        
        // start server
        await app.listen(process.env.PORT || 9999);
        console.log(`server listen on port ${process.env.PORT || 9999}...`);
    }catch(error){
        console.log(error);
    }
}

tourServer();
