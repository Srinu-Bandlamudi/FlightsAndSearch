const express=require('express');
const bodyparser=require("body-parser");

const { PORT }=require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db=require('./models/index');
const {City,Airport}=require('./models/index');
const sequelize=require('sequelize');
const city=require('./models/city');


const setupAndStartServer=async ()=>{

    //create the express object
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
             db.sequelize.sync({alter:true});
        }
       
       
    });
}

setupAndStartServer();


// const city=await City.findOne({
//     where:{
//         id:5
//     }
// });
// const airports=await city.getAirports();
// const newAirport=await Airport.findOne({
//     where:{
//         cityId:1
//     }
    
//  });
//  await city.addAirport(newAirport);
// console.log(city,airports);