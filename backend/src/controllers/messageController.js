const auth = require("../middleware/auth");
const messageService = require("../services/messageService");
const jwt = require("jsonwebtoken");

module.exports = {
    async listPrivateChats(req, res) {
        const {id} = req.params;
        try {
            const response = await messageService.listPrivateChats(id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },
    
    async sendMessage(req, res) {
        const { id } = req.params;
        const {toId} = req.body;
        const {message} = req.body;
        
        try {
            const response = await messageService.sendMessage(id, toId, message);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },

    async create(req, res) {
        const {nameUser, emailUser, passwordUser, biographyUser } = req.body; // método de desconstrução de objetos.    
        try {
            const response  = await userService.create(nameUser, emailUser, passwordUser, biographyUser); 
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },

    async update(req, res) {
        const { emailUser } = req.params;
        const {name, biography} = req.body;
        console.log(name)
        console.log(biography)
        
        const authHeader = req.headers.authorization;
        const parts = authHeader.split(" ")
        const [scheme, token] = parts;
        const {email} = jwt.decode(token);
        
        try {
            const response = await userService.update(emailUser, name, biography, email);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error":error.message});
        }
    },

    async delete(req, res){
        const { id } = req.params;

        const authHeader = req.headers.authorization;
        const {scheme, token} = authHeader.split(" ");
        const {email} = jwt.decode(token);

        try {
            const response = await userService.delete(id, email);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error":error.message});
        }
    }
}