const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Improved MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit process if unable to connect to DB
    }
};

connectDB();

// Import routes
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

// Swagger Documentation
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Car Management API",
            version: "1.0.0",
            description: "API documentation for Car Management Application",
        },
    },
    apis: ["./routes/*.js"], // Path to API route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
