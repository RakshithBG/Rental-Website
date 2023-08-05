const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const authController = require('./controllers/authControllers');
const propertyController = require('./controllers/propertyControllers');
const uploadController = require('./controllers/uploadController');



const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//mongodb connect
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("mongodb has been started")
})

//routes and middleware
app.use("/auth",authController)
app.use("/property",propertyController)
app,use("/upload",uploadController)
//connect server
app.listen(process.env.PORT,(()=>{
    console.log("The server is running in the port 5000")
}))


module.exports=app