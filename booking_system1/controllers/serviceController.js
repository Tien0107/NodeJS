const Service = require('../models/serviceModel');

exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
