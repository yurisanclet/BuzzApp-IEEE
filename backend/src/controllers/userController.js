const auth = require("../middleware/auth");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

module.exports = {
    async findAll(req, res) {
        try {
            const response = await userService.findAll();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },
    
    async findOne(req, res) {
        const { id } = req.params;
        try {
            const response = await userService.findOne(id);
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
        const { id } = req.params;
        const {name, password, biography} = req.body;

        const authHeader = req.headers.authorization;
        const {scheme, token} = authHeader.split(" ");
        const {email} = jwt.decode(token);

        try {
            const response = await userService.update(id, name, password, biography, email);
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