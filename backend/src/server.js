//const express = require('express');
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesroutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

import { connect } from 'mongoose';
dotenv.config();

//connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
}));
app.use(express.json()); //this middleware is used to parse json data from request body

app.use(rateLimiter)


// app.use((req,res,next)=>{
//   console.log("We just got a new request!");
//   console.log(`Request method is ${req.method} for url ${req.url}`);
//   next();
// });

//routes
app.use('/api/notes', notesRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });
});