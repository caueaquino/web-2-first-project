const mongoose = require('mongoose');
const CalendarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    },
    creationUser: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Calendar", CalendarSchema);