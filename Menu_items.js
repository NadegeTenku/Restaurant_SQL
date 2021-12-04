const {sequelize, DataTypes, Model} = require('./db')

class MenuItems extends Model {}

MenuItems.init({
    mealName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    orderDate: DataTypes.DATE
}, {
    sequelize,
    timestamps: false
})

module.exports = {MenuItems}