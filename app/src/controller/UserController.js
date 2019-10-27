const mongoose = require("mongoose");
const User = require("../model/UserModel");

class UserController {
    async show(req, res) {
        const users = await User.findById(req.params.id);
        return res.json(users);
    }
    async store(req, res) {
        const users = await User.create(req.body);
        return res.json(users);
    }
}

module.exports = new UserController();