const express = require("express")
const sequelize = require("sequelize")
const {Database} = require("./Database")
const { OrderRouter, VehicleRouter, DeliveryRouter } = require("./Controllers")
Database.sync({alter:true}).then((err)=>{
	console.log("Database Up and Running")
})
const app = express()
app.use(express.json())
app.use("/api/Orders",OrderRouter)
app.use("/api/Vehicles",VehicleRouter)
app.use("/api/Deliveries",DeliveryRouter)

app.listen(5500,()=>{try{console.log("Listening at port 5500")}catch(err){console.log("Server Crash due to error: ",err)}})
