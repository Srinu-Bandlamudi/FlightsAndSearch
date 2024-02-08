 const { AirportServices}=require('../services/index');

 const airportService=new AirportServices();

 //POST->/airport 
 const create=async (req,res)=>{
    try {
        const airport=await airportService.create(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Successfully created a airport",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a airport",
            err:error
        });
        
    }

 }
//DELETE /airport/:id
 const destroy=async (req,res)=>{
    try {
        const airport=await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Successfully deleted a airport",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete a airport",
            err:error
        });
        
    }

 }
 //PATCH ->/airport/:id  data:{name:"updated name"}

 const update=async (req,res)=>{
    try {
        const airport=await airportService.updateAirport(req.params.id,req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Successfully updated a airport",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update a airport",
            err:error
        });
        
    }

 }
//GET-> /airport/:id
 const get=async (req,res)=>{
    try {
        const airport=await airportService.getAirport(req.params.id);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Successfully fetched a airport",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch a airport",
            err:error
        });
        
    }

 }

 //GET-> /airport/
 const getAll=async (req,res)=>{
    try {
        const airport=await airportService.getAllAirports(req.query);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"Successfully fetched a airport",
            err:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch a airport",
            err:error
        });
        
    }

 }


 module.exports={
    create,
    destroy,
    update,
    get,getAll
 }