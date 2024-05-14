const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;


app.use(cors());
app.use(cors({
    origin: 'https://daily-client-4k2sc5zng-vivek-kumars-projects-c695c9fc.vercel.app/'
  }));

app.use(express.json());

const URL = process.env.MONGO_URI;

mongoose.connect(URL).then(() => {
        console.log("MongoDB connection successful");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });


const dailyRoute = require('./routes/daily_route.js');

app.get("/", (req, res) => {
    res.send("Daily task detail");
});

app.use('/daily',dailyRoute);

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});