const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entity = sequelize.define('Entity', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    attributes: {
        type: DataTypes.JSON,
        allowNull: false,
    },
});

module.exports = Entity;
