const mongoose = require("mongoose");

//create new schema for database
const bookingSchema = {
    days: String,
    hours: String,
    name: {
        type: String,
        trim: true
    },
    contact: String,
    email: String,
    personNum: Number
}

//defining model using schema for database
module.exports = mongoose.model("reservation", bookingSchema);