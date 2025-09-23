import connectDB from "./db/index.js";
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
dotenv.config({
    path:"./.env"
})
import userRouter from "./routes/user.routes.js";
import paymentRoutes from "./routes/payment.routes.js"
const app= express();
app.use(cors({
    // origin:process.env.CORS_ORIGIN,
    origin:"http://localhost:5174" ,
    credentials:true
}))
app.use(express.json());

// payment routes  
app.use("/api/payment", paymentRoutes);
//  user info routes
app.use("/api/user",userRouter);

app.get("/", (req, res) => {
  res.send("Razorpay API is running...");
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,"0.0.0.0",()=>{
        console.log("Server is running on ",process.env.PORT)
    })
})
.catch((err)=>{
console.log("MongoDb connection get failed",err);
})




