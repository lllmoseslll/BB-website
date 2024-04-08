import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(
    process.env.MONGO
)
.then(()=>{
    console.log("mongodb is connected successfully");
}).catch(err => {
    console.log(err);
});
const app = express();
const port = 3000;

app.use(express.json());


app.listen(port, () => {
    console.log(`server is running succesfully on ${port}!`);
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});