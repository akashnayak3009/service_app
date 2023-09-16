import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/db.js';

import cors from 'cors'
import router from './router/router.js';

const app =express();
dotenv.config();
connectDb();


app.use(express.json());
app.use(cors());

app.use("/api", router);


const port =process.env.PORT

app.listen(port,console.log("Server is Running"))