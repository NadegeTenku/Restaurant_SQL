const {sequelize, DataTypes, Model} = require('./db')

const { Restaurant } = require('./Restaurant')
const { Menu } = require('./Menu')
// const { MenuItems } = require('./MenuItems')
// const { Customer} = require('./Customer')
// const { Orders } = require('./Orders')

Menu.belongsTo(Restaurant)

Restaurant.hasMany(Menu)


module.exports = {Restaurant, Menu, sequelize}