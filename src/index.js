const express=require('express');
const bodyparser=require("body-parser");

const { PORT }=require('./config/serverConfig');

const CityRepository=require('./repository/city-repository.js');

const setupAndStartServer=async ()=>{

    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        const repo=new CityRepository();
        repo.createCity({name: 'New Delhi'});
        
    });
}

setupAndStartServer();