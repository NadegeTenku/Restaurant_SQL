const {sequelize, DataTypes, Model} = require('./db')

class Orders extends Model {}

Orders.init({
    customerID: DataTypes.INTEGER,
    ordersDate: DataTypes.DATE,
    price: DataTypes.FLOAT
}, {
    sequelize,
    timestamps: false
})

module.exports = {Orders}