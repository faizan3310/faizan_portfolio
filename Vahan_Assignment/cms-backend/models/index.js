const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entity = sequelize.define('Entity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    attributes: {
        type: DataTypes.JSON,
        allowNull: false,
    },
});

const getDynamicModel = (entityName, attributes) => {
    const modelAttributes = {};
    attributes.forEach(attr => {
        modelAttributes[attr.name] = { type: DataTypes[attr.type.toUpperCase()], allowNull: attr.allowNull || false };
    });
    return sequelize.define(entityName, modelAttributes);
};

module.exports = { Entity, getDynamicModel };
