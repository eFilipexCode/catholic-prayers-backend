const Prayer = require('../models/Prayer.js');
module.exports = {
    async create(req, res) {
        const { title, content, creator } = req.body;
        if (!title || !content) return res.status(400).send("Informações pendentes.");
        const response = await Prayer.create({
            title,
            content,
            creator
        });
        res.json(response);
    },
    async index(req, res) {
        const { page } = req.query;
        console.log(page);
        const response = await Prayer.find({})
            .limit(10)
            .skip((page - 1) * 10)
            .sort({_id: -1});
        res.send(response);
    }
};