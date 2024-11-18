const express = require('express');
const multer = require('multer');
const Car = require('../models/Car');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', upload.array('images'), async (req, res) => {
  const { title, description, tags } = req.body;
  const images = req.files.map((file) => file.path);
  try {
    const car = await Car.create({ title, description, tags: tags.split(','), images });
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
