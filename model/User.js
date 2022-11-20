const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const User = sequelize.define('User', {
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    birthdayDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    utc: {
        type: DataTypes.TINYINT
    }
});


module.exports = User