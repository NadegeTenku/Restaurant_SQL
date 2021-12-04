const {sequelize, DataTypes, Model} = require('./db')

class Customer extends Model {}

Customer.init({
    orderID: DataTypes.INTEGER,
    customerName: DataTypes.STRING,
    paymentType: DataTypes.BOOLEAN
}, {
    sequelize,
    timestamps: false
})

module.exports = {Customer}