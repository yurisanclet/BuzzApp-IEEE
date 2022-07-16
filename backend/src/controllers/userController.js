const userService = require("../services/userService");

module.exports = { // pegar as informações passadas nas rotas
    async findAll(req, res){
        try {
            const response = await userService.findAll();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },
    
    async findOne(req, res) {

    },

    async create(req, res) {
        const {name, email, password} = req.body; // método de desconstrução de objetos.    
        try {
            const response  = await userService.create(name, email, password); 
            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }

    },

    async update(req, res) {

    },

    async delete(req, res){
      
    }
}