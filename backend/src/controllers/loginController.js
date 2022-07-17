const loginService = require("../services/loginService");

module.exports = {
    async login(req, res) {
        const {email, password} = req.body;
        try {
            const token = await loginService.login(email, password);
            return res.status(200).json({"token": token});
        } catch (error) {
            return res.status(400).json({"error": error.message});
        }
    }
}