// routes/entities.js
const express = require('express');
const { Entity } = require('../models');

const router = express.Router();

// Create a new entity
router.post('/', async (req, res) => {
    const { name, attributes } = req.body;
    try {
        const entity = await Entity.create({ name, attributes });
        res.status(201).json(entity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all entities
// router.get('/entities', async (req, res) => {
//     try {
//         const entities = await Entity.findAll();
//         res.json(entities);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

router.get('/entities', async (req, res) => {
    // Send the posts array as a JSON response
    try{
        const entities = await Entity.findAll();
        res.status(200).json(entities);
    }
    catch (error) {
               res.status(500).json({ error: error.message });
             } 
  });

// Get a specific entity by ID
router.get('/:id', async (req, res) => {
    try {
        const entity = await Entity.findByPk(req.params.id);
        if (entity) {
            res.json(entity);
        } else {
            res.status(404).json({ error: 'Entity not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an entity
router.put('/:id', async (req, res) => {
    try {
        const entity = await Entity.findByPk(req.params.id);
        if (entity) {
            await entity.update(req.body);
            res.json(entity);
        } else {
            res.status(404).json({ error: 'Entity not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an entity
router.delete('/:id', async (req, res) => {
    try {
        const entity = await Entity.findByPk(req.params.id);
        if (entity) {
            await entity.destroy();
            res.json({ message: 'Entity deleted' });
        } else {
            res.status(404).json({ error: 'Entity not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

/*
const express = require('express');
const router = express.Router();
const { createEntity, getEntities } = require('../controllers/entitiesController');

router.post('/', createEntity);
router.get('/', getEntities);

module.exports = router;
*/