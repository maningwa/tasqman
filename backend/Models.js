const {Database} = require("./Database")
const {DataTypes} = require("sequelize")

const Order = Database.define("Order",{
        Vendor:{type:DataTypes.STRING},
        Description:{type:DataTypes.STRING},
        Referrence:{type:DataTypes.STRING},
        OrderDate:{type:DataTypes.STRING},
})
const Delivery = Database.define("Order",{
        Vendor:{type:DataTypes.STRING},
        Description:{type:DataTypes.STRING},
        Referrence:{type:DataTypes.STRING},
        OrderDate:{type:DataTypes.STRING},
})
const Vehicle = Database.define("Vehicle",{
    Drive:{type:DataTypes.STRING},
    Registration:{type:DataTypes.STRING},
    Status:{type:DataTypes.STRING},
})

module.exports = {Order, Vehicle, Delivery}