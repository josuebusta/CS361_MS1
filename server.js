const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const Element = require("./models/Element");
const Log = require("./models/Log");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.post("/api/log", async (req, res) => {
    try {
        const {elementId, note, loggedAt, completed} = req.body;

        const element = await Element.findById(elementId);
        if (!element) {
            return res.status(404).json({error: "Element not found."});
        }

        const log = new Log({elementId, note, loggedAt, completed});
        await log.save();

        res.status(201).json({message: "Logged successfully.", log});
    }   catch (err) {
        console.error(err);
        res.status(500).json({error: "Server error."});
    }
});

app.post("/api/element", async (req, res) => {
    try {
        const {name, date} = req.body;

        if (!name) {
            return res.status(400).json({error: "Name is required."});
        }

        const element = new Element({name, date});
        await element.save();

        res.status(201).json({message: "Element added successfully.", element});
    }   catch (err) {
        console.error(err);
        res.status(500).json({error: "Server error."});
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));