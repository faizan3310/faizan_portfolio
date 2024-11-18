const express = require('express');
const multer = require('multer');
const path = require('path');
const { 
    createCar, 
    getCars, 
    getCar, 
    updateCar, 
    deleteCar 
} = require('../controllers/carController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// File filter for images only
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
};

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files to uploads/ folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Unique filename
    },
});

// Initialize multer
const upload = multer({ storage, fileFilter });

// Swagger documentation
/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Get all cars for the logged-in user
 *     description: Retrieve a list of all cars owned by the authenticated user. Supports global search with a keyword.
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Keyword to search in title, description, or tags
 *     responses:
 *       200:
 *         description: List of cars
 *       401:
 *         description: Unauthorized
 */

// Car routes
router.post('/', protect, upload.array('images', 10), createCar); // Create a car with image uploads
router.get('/', protect, getCars);                               // List all cars
router.get('/:id', protect, getCar);                             // Get details of a specific car by ID
router.put('/:id', protect, updateCar);                          // Update a car
router.delete('/:id', protect, deleteCar);                       // Delete a car

module.exports = router;
