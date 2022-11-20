const { DataTypes } = require('sequelize');

const sequelize = require('../config/db')
const User = require('./User')

const PendingEmail = sequelize.define('PendingEmail', {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
})


User.hasOne(PendingEmail)
PendingEmail.belongsTo(User)

module.exports = PendingEmail