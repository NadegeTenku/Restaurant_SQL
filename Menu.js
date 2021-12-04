const {sequelize, DataTypes, Model} = require('./db')

class Menu extends Model {}

Menu.init({
    category: DataTypes.STRING,
    menuType: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
})

module.exports = {Menu}