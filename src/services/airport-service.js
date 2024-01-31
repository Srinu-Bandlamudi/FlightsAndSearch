const { AirportRepository}=require('../repository/index');
const airportRepository=new AirportRepository();

class AirportService{
    async createAirport(name,cityId){
        try {
            const airport=await airportRepository.createAirport(name,cityId);
            return airport;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
            
        }
        

    }

    async deleteAirport(airportId){
        try {
            const airport=await airportRepository.deleteAirport(airportId);
            return airport;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
            
        }
        

    }

    async updateAirport(airportId,data){
        try {
            const airport=await airportRepository.updateAirport(airportId,data);
            return airport;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
            
        }
        

    }

    async getAirport(airportId){
        try {
            const airport=await airportRepository.getAirport(airportId);
            return airport;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
            
        }
        

    }

    async getAllAirports(filter){
        try {
            const airport=await airportRepository.getAllAirports({cityId:filter.cityId});
            return airport;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
            
        }
        

    }





}

module.exports=AirportService;