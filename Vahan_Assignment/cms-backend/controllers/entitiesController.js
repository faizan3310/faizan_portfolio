const { Entity, getDynamicModel } = require('../models');
const sequelize = require('../config/database');

exports.createEntity = async (req, res) => {
    const { name, attributes } = req.body;
    try {
        const newEntity = await Entity.create({ name, attributes });
        getDynamicModel(name, attributes); // Ensure the model is created
        await sequelize.sync(); // Sync the new model with the database
        res.status(201).json(newEntity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getEntities = async (req, res) => {
    try {
        const entities = await Entity.findAll();
        res.json(entities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
