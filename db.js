const {Sequelize , DataTypes, Model} = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', 
    storage: './restaurant.sqlite',
    logging: true 
})

module.exports = {sequelize, DataTypes, Model}