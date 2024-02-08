const { Airport } =require('../models/index');
const { Op }=require('sequelize');
const CrudRepository = require('./crud-repository');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
    // async createAirport({name,cityId}){
    //     try {
    //         const airport=await Airport.create({
    //             name,
    //             cityId
    //         });
    //         return airport;
            
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer ");
    //         throw { error };
            
    //     }

    // }
    // async deleteAirport(airportId){
    //     try {
    //         await Airport.destroy({
    //             where:{
    //                 id:airportId
    //             }
                
    //         });
    //         return true;
            
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer ");
    //         throw { error };
            
    //     }

    // }
    // async updateAirport(airportId,data){
    //     try {
    //         const airport=await Airport.findByPk(airportId);
    //         airport.name=data.name;
    //         airport.cityId=data.cityId;
    //         await airport.save();
    //         return airport;
            
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer ");
    //         throw { error };
            
    //     }
        
    // }
    // async getAirport(airportId){
    //     try {
    //         const airport=await Airport.findByPk(airportId);
    //         return airport;
            
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer ");
    //         throw { error };
            
    //     }
        
    // }

    async getAllAirports(filter){
        try {
            if(filter.cityId){
                const airports=await Airport.findAll({
                    where:{
                        cityId:{
                            [Op.startsWith]:filter.cityId
                        }
                       
                    }
                });
                return airports;

            }
            const airports=await Airport.findAll();
            return airports;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer ");
            throw { error };
            
        }
        
    }
    


}

module.exports=AirportRepository;