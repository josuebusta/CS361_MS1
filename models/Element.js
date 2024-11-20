const mongoose = require("mongoose")

const ElementSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, default: Date.now }
});

module.exports = mongoose.model("Element", ElementSchema);