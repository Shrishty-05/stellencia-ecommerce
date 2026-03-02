import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const port = process.env.PORT || 8000;

dotenv.config(); //activate .env file

// create server instance
const app = express();  

//allow front end to access backend
app.use(cors()); 

// to read incoming json data
app.use(express.json());

app.get("/",(req, res) =>{
    res.send("API is running...");
});

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// future improvement : 
/*
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
*/