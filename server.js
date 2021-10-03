"use strict";
const express=require('express');
const axios=require('axios');
const cors=require('cors');
require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT;
const MONGO=process.env.MONGO;
const mongoose=require('mongoose');
const { request, response } = require('express');
mongoose.connect(MONGO);


const allData=(request,response)=>{
    const url="https://fruit-api-301.herokuapp.com/getFruit";
    axios.get(url).then(result=>{
        response.json(result.data)
    })
}


app.get('/allData',allData)


const{addFav,getFav,deleteFav,updateFav}=require('./controllers/fr.controller')

app.listen(PORT)