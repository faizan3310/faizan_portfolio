const { Entity, getDynamicModel } = require('../models');

exports.createEntry = async (req, res) => {
    const { entityId, data } = req.body;
    try {
        const entity = await Entity.findByPk(entityId);
        if (!entity) return res.status(404).json({ error: 'Entity not found' });

        const Model = getDynamicModel(entity.name, entity.attributes);
        const newEntry = await Model.create(data);
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getEntries = async (req, res) => {
    const { entityId } = req.params;
    try {
        const entity = await Entity.findByPk(entityId);
        if (!entity) return res.status(404).json({ error: 'Entity not found' });

        const Model = getDynamicModel(entity.name, entity.attributes);
        const entries = await Model.findAll();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateEntry = async (req, res) => {
    const { entityId, entryId, data } = req.body;
    try {
        const entity = await Entity.findByPk(entityId);
        if (!entity) return res.status(404).json({ error: 'Entity not found' });

        const Model = getDynamicModel(entity.name, entity.attributes);
        const entry = await Model.findByPk(entryId);
        if (!entry) return res.status(404).json({ error: 'Entry not found' });

        await entry.update(data);
        res.json(entry);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteEntry = async (req, res) => {
    const { entityId, entryId } = req.body;
    try {
        const entity = await Entity.findByPk(entityId);
        if (!entity) return res.status(404).json({ error: 'Entity not found' });

        const Model = getDynamicModel(entity.name, entity.attributes);
        const entry = await Model.findByPk(entryId);
        if (!entry) return res.status(404).json({ error: 'Entry not found' });

        await entry.destroy();
        res.json({ message: 'Entry deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
