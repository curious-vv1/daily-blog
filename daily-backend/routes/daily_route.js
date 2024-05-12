const router = require('express').Router();
const Daily = require('../models/daily');


router.route("/add").post(async (req,res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;


        const newDay = new Daily({ title, content });

        const saveDay = await newDay.save();
        res.status(201).json(saveDay);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"internal server error"});
    }
    
});


router.route("/get").get(async (req,res) => {
    try {
        const days = await Daily.find();
        res.json(days);                      
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "internal server error" });   
    }
})





module.exports = router;
