
const TourModel = require('./model');
const express = require('express');

const tourRoute = express.Router();

tourRoute.get('/:id',async function(req,res){
    console.log(req.params.id);
    const id = req.params.id;

    try{   

        const tour = await TourModel.findOne({_id: id});
        res.json({
            success:true,
            tour: tour,
        });
    }catch(error){
        res.json({
            success:false,
            message:error
        });
    }
});

tourRoute.post('/', async function(req,res){
    console.log(req.body);
    const tour = req.body;

    try{
        const newTour =  await TourModel.create(tour);
        res.json({
            success:true
        })
    }catch(error){
        res.json({
            success:false,
            message:error
        })
    }
    
});

tourRoute.post('/edit/:id', async function(req,res){
    console.log(req.body);
    console.log(req.params.id);
    const newData = req.body;
    const id = req.params.id;

    try{
        const editTour = await TourModel.findOneAndUpdate({_id: id}, newData, {new: true, useFindAndModify: false});
        res.json({
            success: true,
        })
    }catch(error){
        res.json({
            success: false,
            message:error
        })
    }
});


module.exports = tourRoute;

