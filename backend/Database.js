const {Sequelize,DataTypes} = require("sequelize")

const Database = new Sequelize(
    "test.sqlite",
    "User",
    "Password",
    {dialect:"sqlite",host:"./test.sqlite"})
module.exports = {
    Database
}