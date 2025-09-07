import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import mongoose from 'mongoose';
import authRoutes from './routes/auth-routes/index.js'
import mediaRoutes from './routes/instructor-routes/media-routes.js'

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    // origin : "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(express.json());

//db connection
mongoose.connect(MONGO_URI)
.then(() => console.log('MONGODB CONNECTED SUCCESSFULLY'))
.catch((e) => console.log(e))

app.use('/auth', authRoutes);
app.use('/media', mediaRoutes);

app.listen(PORT , ()=> {
    console.log(`Server is Running on Port ${PORT}`);
    
})
