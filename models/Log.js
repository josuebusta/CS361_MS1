const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    elementId: {type: mongoose.Schema.Types.ObjectId, ref: "Element", required: true},
    note: {type: String},
    loggedAt: {type: Date, default: Date.now},
    completed: {type: Boolean, default: false},
});

module.exports = mongoose.model("Log", LogSchema);