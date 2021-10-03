"use strict";
const { request, response } = require('express');
const frModel=require('../models/fr.model')


const getFav=(request,response)=>{
    frModel.find({email:request.query.email},(err,frData)=>{
        response.json(frData);
    })
}

const addFav=(request,response)=>{
    const {name,image,price,email}=request.body;
    const newFav= new frModel({name,image,price,email});
    newFav.save();
    response.json(newFav);
    
}

const deleteFav=(request,response)=>{
    const favId=request.params.fav_id;
    frModel.deleteOne({_id:favId},(err,deletedData)=>{
        response.json(deletedData)
    })
}




const updateFav=(request,response)=>{
    const {name,image,price,email}=request.body;
    const favId=request.params.fav_id;
    frModel.findByIdAndUpdate({_id:favId},{name,image,price,email},{new:true},(err,updatedData)=>{
        response.json(updatedData)
    })
}

module.exports={
    addFav,getFav,deleteFav,updateFav
}