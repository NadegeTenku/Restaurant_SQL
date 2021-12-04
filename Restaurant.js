const {sequelize, DataTypes, Model} = require('./db')

class Restaurant extends Model {}

Restaurant.init({
    restaurantName: DataTypes.STRING, //attributes / property of the restaurant
    location: DataTypes.STRING,
    capacity: DataTypes.INTEGER

  
}, {
    sequelize,
    timestamps: false
})

module.exports = {Restaurant}