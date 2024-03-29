class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
            
        } catch (error) {
            console.log('Something went wrong in the CRUD repo');
            throw error;
        }

    }
    async destroy(modelId){
        try {
            const result =await this.model.destroy({
                where:{
                    id:modelId
                }
            });
            return result;
        } catch (error) {
            console.log('Something went wrong in the CRUD repo');
            throw error;
        }
    }
    async get(modelId){
        try {
            const response=await this.model.findByPk(modelId);
            return response;
        } catch (error) {
            console.log('Something went wrong in the CRUD repo');
            throw error;
        }
    }
    async getAll(){
        try {
            const response=await this.model.findAll();
            return response;
            
        } catch (error) {
            console.log('Something went wrong in the CRUD repo');
            throw error;
        }
    }
    async update(modelId,data){
        try {
            const response =await this.model.update(data,{
                where:{
                    id:modelId
                }

            })
        } catch (error) {
            console.log('Something went wrong in the CRUD repo');
            throw error;
        }
    }
}

module.exports=CrudRepository;