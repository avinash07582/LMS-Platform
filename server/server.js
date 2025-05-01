
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const authRoute = require("./routers/auth-router")
const contactRoute = require("./routers/contact-router")
const serviceRoute = require("./routers/service-router")
const adminRoute = require("./routers/admin-router")
const connectDb = require("./utils/db")
const errorMiddleware = require("./middlewares/error-middleware")

// handling cors
const corsOptions ={

    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}
app.use(cors(corsOptions))

app.use(express.json())






app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)


// lets define admin route
app.use("/api/admin",adminRoute)
app.use(errorMiddleware)





connectDb()
    

app.listen(5000,()=>{
 
    console.log("Port is 5000");
    
})