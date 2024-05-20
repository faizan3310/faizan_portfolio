 const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./config/database');
const entityRoutes = require('./routes/entities');
const entryRoutes = require('./routes/entries');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/entities', entityRoutes);
app.use('/entries', entryRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});