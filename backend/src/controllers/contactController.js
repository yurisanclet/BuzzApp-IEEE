const contactService = require('../services/contactService');
const {verifyEmail} = require('../middleware/auth');

module.exports = { // pegar as informações passadas nas rotas
    async findAll(req, res){
        try {
            const response = await contactService.findAll(req.params.emailUser);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },
    /*
    async findOne(req, res) {
        const {id} = req.params;
        const { email } = req.body;
        try {
            const response = await contactService.findOne(id, email);
            return res.status(200).json(response);
        } catch(error) {
            return res.status(400).json({"error":error.message});
        }
    },
    */
    async create(req, res) {
        const {emailUser} = req.params; // método de desconstrução de objetos.
        const {emailAdd} = req.body;
        
        // const {id} = req.params;   
        try {
            verifyEmail(emailUser, req.headers.authorization); 
            const response  = await contactService.create(emailUser, emailAdd); 
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }

    },

}