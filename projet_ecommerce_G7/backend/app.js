
const express=require("express")
const app=express()
const prodRouter=require("./routes/ProductRoutes")
const catRouter=require("./routes/categoryRoutes")
const cors = require("cors")
app.use(cors())
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)
.then(result=>console.log("connexion effectué"))


app.use("/products",prodRouter)
app.use("/categories",catRouter)
app.get("/",(req,res)=>{
    res.send("<h2> bienvenue dans notre application express </h2>")
});


app.listen(4455,function(){
    console.log("server is starting")
})