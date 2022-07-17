const userService = require("../services/userService");

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
        const {name, email, password} = req.body;
        
        try {
            const response = await userService.create(name, email, password);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, password } = req.body;
        try {
            const response = await userService.update(id, name, password);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        try {
            const response = await userService.delete(id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    }
}