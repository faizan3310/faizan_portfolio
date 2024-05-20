// routes/entries.js
const express = require('express');
const { Entry } = require('../models'); // Adjust to match your Entry model

const router = express.Router();

// Create a new entry
router.post('/', async (req, res) => {
    try {
        const entry = await Entry.create(req.body);
        res.status(201).json(entry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all entries
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.findAll();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific entry by ID
router.get('/:id', async (req, res) => {
    try {
        const entry = await Entry.findByPk(req.params.id);
        if (entry) {
            res.json(entry);
        } else {
            res.status(404).json({ error: 'Entry not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an entry
router.put('/:id', async (req, res) => {
    try {
        const entry = await Entry.findByPk(req.params.id);
        if (entry) {
            await entry.update(req.body);
            res.json(entry);
        } else {
            res.status(404).json({ error: 'Entry not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an entry
router.delete('/:id', async (req, res) => {
    try {
        const entry = await Entry.findByPk(req.params.id);
        if (entry) {
            await entry.destroy();
            res.json({ message: 'Entry deleted' });
        } else {
            res.status(404).json({ error: 'Entry not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

/*
const express = require('express');
const router = express.Router();
const { createEntry, getEntries, updateEntry, deleteEntry } = require('../controllers/entriesController');

router.post('/', createEntry);
router.get('/:entityId', getEntries);
router.patch('/', updateEntry);
router.delete('/', deleteEntry);

module.exports = router;
*/