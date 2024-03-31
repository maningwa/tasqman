const { Order,Vehicle,Delivery } = require("./Models")

const OrderRouter = require("express").Router()
const VehicleRouter = require("express").Router()
const DeliveryRouter = require("express").Router()


OrderRouter.get("/",(req,res)=>{
    Order.findAll({limit:20}).then(data=>res.send(data))
})
OrderRouter.post("/",(req,res)=>{
    Order.create(req.body).then(data=>res.send({message:"Successfully Created",data}))
})

VehicleRouter.get("/",(req,res)=>{
    Vehicle.findAll({limit:20}).then(data=>res.send(data))
})
VehicleRouter.post("/",(req,res)=>{
    Vehicle.create(req.body).then(data=>res.send({message:"Successfully Created",data}))
})

DeliveryRouter.get("/",(req,res)=>{
    Delivery.findAll({limit:20}).then(data=>res.send(data))
})
DeliveryRouter.post("/",(req,res)=>{
    Delivery.create(req.body).then(data=>res.send({message:"Successfully Created",data}))
})


module.exports = {OrderRouter,VehicleRouter,DeliveryRouter}