const {sequelize, DataTypes, Model} = require('../Sequelize-music/Sequelize-music/db')

const { Menu } = require('./Menu')
const { Restaurant } = require('./Restaurant')

Menu.belongsTo(Restaurant)

Restaurant.hasMany(Menu)

module.exports = {Menu, Restaurant, sequelize}