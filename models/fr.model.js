
"use strict";

const mongoose=require('mongoose');

const frSchema=new mongoose.Schema({
    name:String,
    image:String,
    price:String,
    email:String
})


const frModel=mongoose.model('myFav',frSchema);


module.exports=frModel