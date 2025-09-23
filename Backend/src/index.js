import dotenv from "dotenv"
import express from "express"
import cors from "cors"
dotenv.config({
    path:"./.env"
})
import paymentRoutes from "./routes/payment.routes.js"

const app= express();
console.log("app created")
app.use(cors({
    // origin:process.env.CORS_ORIGIN,
    origin:"http://localhost:5174" ,
    credentials:true
}))
app.use(express.json());

// payment routes  
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Razorpay API is running...");
});

try {    
 app.listen(process.env.PORT || 5000, () => {
        console.log("Server is running on", process.env.PORT || 5000);
       
    }); 
}catch(err){(err)=>{
console.log("MongoDb connection get failed",err);
}}




