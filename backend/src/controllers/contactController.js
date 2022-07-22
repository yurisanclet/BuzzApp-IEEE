const contactService = require('../services/contactService');

module.exports = { // pegar as informações passadas nas rotas
    async findAll(req, res){
        try {
            const response = await contactService.findAll(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },
    
    async findOne(req, res) {
        const { id } = req.params;
        try {
            const response = await contactService.findOne(id);
            return res.status(200).json(response);
        } catch(error) {
            return res.status(400).json({"error":error.message});
        }
    },

    async create(req, res) {
        const {email} = req.body; // método de desconstrução de objetos. 
        const {id} = req.params;   
        try {
            const response  = await contactService.create(email, id); 
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }

    },

}