const Car = require('../models/Car');

// Create a car
const createCar = async (req, res) => {
    const { title, description, tags } = req.body;
    const images = req.files.map(file => file.path); // Using multer for file uploads
    const car = new Car({ title, description, images, tags, user: req.user.id });

    try {
        await car.save();
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all cars for a user
const getCars = async (req, res) => {
    const { keyword } = req.query;

    let searchQuery = { user: req.user.id }; // Filter by logged-in user's cars

    if (keyword) {
        const regex = new RegExp(keyword, 'i'); // Case-insensitive search
        searchQuery = {
            ...searchQuery,
            $or: [
                { title: { $regex: regex } },
                { description: { $regex: regex } },
                { tags: { $regex: regex } },
            ],
        };
    }

    try {
        const cars = await Car.find(searchQuery);
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a car by ID
const getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (car.user.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a car
const updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a car
const deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Car deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createCar, getCars, getCar, updateCar, deleteCar };


