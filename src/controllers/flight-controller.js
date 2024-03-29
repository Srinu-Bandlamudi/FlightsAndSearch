const { FlightServices}=require('../services/index');
const { SuccessCodes }=require('../utils/error-codes');
const flightService=new FlightServices();

const create=async (req,res)=>{
    try {
        let flightRequestData={
        flightNumber:req.body.flightNumber,
        airplaneId:req.body.airplaneId,
        departureAirportId:req.body.departureAirportId,
        arrivalAirportId:req.body.arrivalAirportId,
        departureTime:req.body.departureTime,
        arrivalTime:req.body.arrivalTime,
        price:req.body.price
        }
        const flight=await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:"Successfully created a flight",
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
        });
        
    }
}

const getAll=async (req,res)=>{
    try {
        const flights=await flightService.getAllFlightData(req.query);
        res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:"Successfully fetched the flights",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the flights",
            err:error
        });
        
    }
}
const getFlight=async (req,res)=>{
    try {
        const flight=await flightService.getFlight(req.params.id);
        res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Successfully fetched the flight",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the flight",
            err:error
        });
        
    }

}
const updateFlight=async (req,res)=>{
    try {
        const flight=await flightService.updateFlight(req.params.id,req.body);
        res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Successfully updated the flight",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the flight",
            err:error
        });
        
    }
    
}

module.exports={
    create,
    getAll,
    getFlight,
    updateFlight
}